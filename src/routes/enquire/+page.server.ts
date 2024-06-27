import nodemailer, { type TransportOptions } from 'nodemailer';
import { fail, redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

function emptyString(value: string | null | undefined) {
	return value === null || value === undefined || value.replace(/\s/g, '') === '';
}

/** @type {import('./$types').RequestHandler} */
export const actions = {
	default: async ({ request }) => {
		const data: FormData = await request.formData();
		const name: string = data.get('name') as string;
		const email: string = data.get('email') as string;
		const message: string = data.get('message') as string;

		console.log(name, email, message);

		if (emptyString(name) || emptyString(email) || emptyString(message)) {
			return fail(422, { error: 'Please fill out all fields.' });
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
					ciphers: 'SSLv3',
					rejectUnAuthorized: false
				},
				debug: true,
				logger: true
			} as TransportOptions);

			const mailOptions = {
				from: `"Enquiries" <${env.EMAIL_USER}>`,
				to: 'info@astrabusinesscentre.co.uk',
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
