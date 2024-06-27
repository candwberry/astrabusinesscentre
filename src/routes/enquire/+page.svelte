<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import enquiry from '$lib/assets/enquiry.png';
	import type { ActionData } from './$types';
	import { Turnstile } from 'svelte-turnstile';

	export let form: ActionData;
	let success: string | null = $page.url.searchParams.get('success');
	let processing: boolean = false;

	page.subscribe((value) => {
		success = value.url.searchParams.get('success');
	});
</script>

<svelte:head>
	<title>Enquire at Astra</title>
</svelte:head>

<main>
	<div>
		<div id="div">
			<img id="bigImage" src={enquiry} alt="enquiry" />
		</div>
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
			<h1 style="margin-top: 0;">Get in touch</h1>
			<h5>
				Have an enquiry or something to discuss? Fill out the form below and our team will quickly
				get back to you.
			</h5>
			<div class="fc">
				<div class="fc">
					<label for="name">Full Name</label>
					<div class="input-container">
						<input type="text" id="name" name="name" placeholder="David" required />
					</div>
				</div>
				<div class="fc">
					<label for="email">Email</label>
					<div class="input-container">
						<input type="email" id="email" name="email" placeholder="david@cwberry.com" required />
					</div>
				</div>
			</div>
			<div class="fc">
				<label for="message">Message</label>
				<div class="input-container">
					<textarea id="message" name="message" placeholder="One office please." required
					></textarea>
				</div>
			</div>
			<div class="fr" style="align-items: center; min-height: 65px; max-weight: 65px; ">
				<button
					type="submit"
					>Send enquiry</button
				>
				{#if form?.error}
					<p style="color: red;">{form.error}</p>
				{:else if success}
					<p style="color: green;">Email sent succesfully! Thankyou!</p>
				{:else if processing}
					<p style="color: grey;">Processing...</p>
				{/if}
				<Turnstile siteKey="0x4AAAAAAAdaq7baunr8wH5G" forms={true} formsField={"cf-turnstile-response"}/>
			</div>
		</form>
	</div>
</main>

<style>
	#div {
		height: 100%;
		width: 40%;
	}

	button {
		background-color: #ee6925;
		color: white;
		padding: 0.75rem 1rem;
		border: none;
		border-radius: 1rem;
		cursor: pointer;
		font-weight: bold;
	}

	input {
		border: none;
		background: transparent;
		outline: none;
		width: 100%;
	}

	input::placeholder {
		color: grey;
	}

	form {
		width: 60%;
		justify-content: center;
		height: 100%;
		padding: 0 2rem;
		padding-right: 1rem;
		display: flex;
		flex-direction: column;
	}

	main {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;

		& > div {
			position: absolute;
			color: black;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			padding: 2em 1em;
			border-radius: 1rem;
			background-color: white;
			height: 50vh;
			width: calc(90%);
			top: 5%;
			z-index: 5;
		}
	}

	p {
		font-size: 0.9rem;
		padding: 0;
		margin: 0;
	}

	textarea {
		border: none;
		background: transparent;
		outline: none;
		width: 100%;
		height: 5rem;
	}

	/* Custom classes */
	#bigImage {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}

	.input-container {
		display: inline-block;
		background-color: #f5f5f5;
		padding: 10px;
		border-radius: 1rem;
	}

	.fr {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.fc {
		display: flex;
		flex-direction: column;
		margin-bottom: 1em;
		gap: 0.2em;
	}
	h1,
	h5 {
		margin-top: 0;
	}
	h1 {
		margin-bottom: 0.25em;
	}

	/* Media Queries */
	@media (max-width: 768px) {
	}

	@media (max-width: 1024px) {
		.fr {
			flex-direction: column;
		}

		textarea {
			height: 2rem;
		}

		p {
			margin: 0.4em;
		}

		#bigImage {
			display: none;
		}

		#div {
			width: 0%;
		}

		button {
			margin-bottom: 0.4em;
		}
	}
</style>
