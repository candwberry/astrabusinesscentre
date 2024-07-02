import nodemailer, { type TransportOptions } from 'nodemailer';
import { fail, redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

interface TokenValidateResponse {
	'error-codes': string[];
	success: boolean;
	action: string;
	cdata: string;
}

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

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data: FormData = await request.formData();
		const name: string = data.get('name') as string;
		const email: string = data.get('email') as string;
		const message: string = data.get('message') as string;

		const turnstile: string = data.get('cf-turnstile-response') as string;
		console.log(name, email, message, turnstile);

		if (emptyString(name) || emptyString(email) || emptyString(message)) {
			return fail(422, { error: 'Please fill out all fields.' });
		}

		// Check the key after, saves a wasted request :)
		const SECRET_KEY = env.CF_TURNSTILE_SECRET || '';
		const { success, error } = await validateToken(turnstile, SECRET_KEY);

		if (!success) {
			console.log(error);
			return fail(422, { error: 'Bot validation failed :(' });
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
				from: `"Enquiries" <${env.EMAIL_USER}>`,
				to: 'j.white@cwberry.com',
				subject: 'New Enquiry',
				text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
				html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
			};

			await transporter.sendMail(mailOptions);
			console.log('Message sent!');
		} catch (error) {
			console.error('Error sending email\n', error);
			return fail(422, { error: 'Umm, something went wrong, please try again!' });
		}

		return redirect(303, '/enquire?success=true');
	}
};
