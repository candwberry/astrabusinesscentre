<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import enquiry from '$lib/assets/office.jpg';
	import type { ActionData } from './$types';
	import { Turnstile } from 'svelte-turnstile';
	import contact from '$lib/assets/contact.svg';

	export let form: ActionData;
	let success: string | null = $page.url.searchParams.get('success');
	let processing: boolean = false;

	page.subscribe((value) => {
		success = value.url.searchParams.get('success');
	});
</script>

<svelte:head>
	<meta name="title" content="Enquire About Unit Rentals | Astra Business Centre" />
	<meta
		name="description"
		content="Looking for office space? Enquire about renting units at Astra Business Centre. Flexible options and prime locations. Contact us today!"
	/>
	<title>Enquire at Astra</title>
</svelte:head>

<main>
	<div class="container">
		<div class="image-column">
			<img id="bigImage" src={enquiry} alt="enquiry" />
		</div>
		<div class="form-column">
			<form
				method="POST"
				use:enhance={() => {
					processing = true;
					return ({ update }) => {
						update().finally(async () => {
							processing = false;
						});
					};
				}}
			>
				<h1><img src={contact} alt="" />Get in touch</h1>
				<h5>
					Have an enquiry? Fill out the form and we'll get back to you quickly.
				</h5>
				<div style="margin: auto 0;">
					<div class="form-grid">
						<div class="form-field">
							<label for="name">Full Name</label>
							<input type="text" id="name" name="name" placeholder="David" required />
						</div>
						<div class="form-field">
							<label for="email">Email</label>
							<input type="email" id="email" name="email" placeholder="david@cwberry.com" required />
						</div>
					</div>
					<div class="form-field">
						<label for="message">Message</label>
						<textarea id="message" name="message" placeholder="One office please." required></textarea>
					</div>	
				</div>
				<div class="form-actions">
					<div id="turnstile-container">
						<Turnstile
							siteKey="0x4AAAAAAAdaq7baunr8wH5G"
							forms={true}
							formsField={'cf-turnstile-response'}
							appearance={'interaction-only'}
						/>
					</div>
					<button type="submit">Send enquiry</button>
				</div>
				<div class="form-status">
					{#if form?.error}
						<p class="error">{form.error}</p>
					{:else if success}
						<p class="success">Email sent successfully! Thank you!</p>
					{:else if processing}
						<p class="processing">Processing...</p>
					{/if}
				</div>
			</form>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(92vh + 6rem); /* Accounting for the 8vh navbar */
		padding: 0 1rem;
		overflow: hidden;
	}

	.container {
		display: flex;
		width: 100%;
		max-width: 1200px;
		background-color: white;
		border-radius: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		height: 100%;
		overflow: hidden;
	}

	.image-column, .form-column {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.image-column {
		flex: 1;
		background-color: #f5f5f5;
	}

	.form-column {
		flex: 2;
		overflow: visible;
		display: flex;
	}

	#bigImage {
		width: 100%;
		height: 100%;
		border-radius: 1rem;
		object-fit: cover;
	}

	form {
		display: flex;
		flex-direction: column;
		color: #081535;
		height: 100%;
		overflow-y: auto;
	}

	h1 {
		font-size: 2rem;
		margin: 0 0 0.5rem 0;
		display: flex;
		align-items: center;
	}

	h1 img {
		height: 1.5em;
		margin-right: 0.5rem;
	}

	h5 {
		font-size: 1rem;
		margin: 0 0 1rem 0;
		font-weight: normal;
	}

	.form-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		margin-bottom: 1rem;
	}

	.form-field {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}

	label {
		margin-bottom: 0.25rem;
		font-size: 0.9rem;
	}

	input, textarea {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		font-size: 0.9rem;
		display: inline-block;
		background-color: #f5f5f5;
		padding: 10px;
		border-radius: 1rem;
	}

	input:active, input:focus, textarea:active, textarea:focus {
		outline: grey auto 1px;
	}

	textarea {
		height: 5rem;
		resize: none;
	}

	.form-actions {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	button {
		background-color: #ee6925;
		color: white;
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
		font-weight: bold;
		font-size: 0.9rem;
	}

	#turnstile-container {
		display: flex;
		justify-content: center;
		transform-origin: right;
	}

	.form-status {
		font-size: 0.8rem;
		text-align: center;

		& > p {
			padding: 0;
			margin-top: 0;
		}
	}

	.error { color: red; }
	.success { color: green; }
	.processing { color: #081535; }

	@media (max-width: 1024px) {
		.image-column {
			display: none;
		}

		.form-column {
			flex: 1;
		}
	}

	@media (max-width: 768px) {
		.form-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		h1 {
			font-size: 1.5rem;
		}

		h5 {
			font-size: 0.9rem;
		}

		.form-actions {
			flex-direction: column;
			align-items: stretch;
		}

		button {
			width: 100%;
			margin-bottom: 0.4rem;
		}
	}

	@media (max-width: 480px) {
		main {
			padding: 0 1rem;
		}

		.container {
		}

		.form-column {
			padding: 1rem;
		}

		h1 {
			font-size: 1.2rem;
		}

		h5 {
			font-size: 0.8rem;
		}

		input, textarea, button {
			font-size: 0.8rem;
		}
	}
</style>