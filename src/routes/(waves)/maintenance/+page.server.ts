import nodemailer, { type TransportOptions } from 'nodemailer';
import { fail, redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

interface TokenValidateResponse {
	'error-codes': string[];
	success: boolean;
	action: string;
	cdata: string;
}
export const prerender = false;

function emptyString(value: string | null | undefined) {
	return value === null || value === undefined || value.replace(/\s/g, '') === '';
}

async function validateToken(token: string, secret: string) {
	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			response: token,
			secret: secret
		})
	});

	const data: TokenValidateResponse = await response.json();

	return {
		// Return the status
		success: data.success,

		// Return the first error if it exists
		error: data['error-codes']?.length ? data['error-codes'][0] : null
	};
}

/** @type {import('./$types').RequestHandler} */
export const actions = {
	default: async ({ request }) => {
		const data: FormData = await request.formData();
		const name: string = data.get('name') as string;
		const email: string = data.get('email') as string;
		const message: string = data.get('message') as string;
		const unit: string = data.get('unit') as string;
		const turnstile: string = data.get('cf-turnstile-response') as string;
		console.log(name, email, message, unit, turnstile);

		if (emptyString(name) || emptyString(email) || emptyString(message) || emptyString(unit)) {
			// For some reason client-side verification on the unit selector DOESN'T WORK. So we will do it here.
			return fail(422, { error: "Don't forget to select and enter your unit!" }); 
		}

		// Check the key after, saves a wasted request :)
		const SECRET_KEY = env.CF_TURNSTILE_SECRET || '';
		const { success, error } = await validateToken(turnstile, SECRET_KEY);

		if (!success) {
			console.log(error);
			return fail(422, { error: "Bot validation failed :(" });
		}

		try {
			const transporter = nodemailer.createTransport({
				host: 'smtp.office365.com',
				secure: false,
				port: 587,
				auth: {
					user: env.EMAIL_USER || '',
					pass: env.EMAIL_PASS || ''
				},
				tls: {
					ciphers: 'TLSv1.2',
					rejectUnauthorized: true
				},
				debug: true,
				logger: true
			} as TransportOptions);

			const mailOptions = {
				from: `"Facilities" <${env.EMAIL_USER}>`,
				to: 'facilities@astrabusinesscentre.co.uk',
				subject: 'Maintenance Request',
				text: `Name: ${name}\nEmail: ${email}\nUnit: ${unit}\nMessage: ${message}`,
				html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Unit:</strong> ${unit}</p><p><strong>Message:</strong> ${message}</p>`
			};

			await transporter.sendMail(mailOptions);
			console.log('Message Sent!');
		} catch (error) {
			console.error('Error sending email\n', error);
			return fail(422, { error: 'Something goofed, please try again!' });
		}

		return redirect(303, '/maintenance?success=true');
	}
};
