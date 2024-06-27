<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Map from '$lib/components/Map.svelte';
	import maintenance from '$lib/assets/maintenance.svg';
	import { Turnstile } from 'svelte-turnstile';

	export let form: ActionData;
	let success: string | null = $page.url.searchParams.get('success');
	let map: Map;
	let unit: string = '';
	let processing: boolean = false;

	function handleMapInput(selectedUnit: string) {
		unit = selectedUnit;
	}

	page.subscribe((value) => {
		success = value.url.searchParams.get('success');
	});
</script>

<svelte:head>
	<title>Maintenance</title>
</svelte:head>

<main>
	<div>
		<div id="div">
			<Map bind:this={map} callback={handleMapInput} />
		</div>
		<form use:enhance method="POST">
			<h1 style="margin-top: 0;"><img src={maintenance} alt="" /> Got a problem?</h1>
			<h5>Give us the details below and we'll sort it out as soon as possible.</h5>
			<div class="fc">
				<div class="fc">
					<label for="name">Company</label>
					<div class="input-container">
						<input type="text" id="name" name="name" placeholder="C&W Berry" required />
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
					<textarea id="message" name="message" placeholder="The roof has fallen." required
					></textarea>
				</div>
				<input
					type="text"
					style="opacity: 0; height:0; width: 0; position: absolute; top: 5rem; left: 5rem;"
					name="unit"
					bind:value={unit}
					required
				/>
			</div>
			<div class="fr" style="align-items: center;">
				<button
					type="submit"
					on:click={() => {
						processing = true;
					}}>Send enquiry</button
				>
				{#if form?.error}
					<p style="color: red;">{form.error}</p>
				{:else if success}
					<p style="color: green;">Email sent succesfully! Thankyou, we will be in touch.</p>
				{:else if processing}
					<p style="color: grey;">Processing...</p>
				{/if}
				<Turnstile siteKey="0x4AAAAAAAdaq7baunr8wH5G" forms={true} formsField={"cf-turnstile-response"} theme="dark"/>
			</div>
		</form>
	</div>
</main>

<style>
	button {
		background-color: #ee6925;
		color: white;
		padding: 0.75rem 1rem;
		border: none;
		border-radius: 1rem;
		cursor: pointer;
		font-weight: bold;
	}

	img {
		filter: invert(1);
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
		justify-content: start;
		align-items: center;
		height: 100%;
		padding: 0 2rem;
		padding-right: 1rem;
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

	/* Media Queries */
	@media (max-width: 768px) {
		h1,
		h5 {
			margin-top: 0;
		}
	}

	@media (max-width: 1024px) {
		.fr {
			flex-direction: column;
		}

		textarea {
			height: 2rem;
		}
	}

	@media (min-width: 1024px) {
		#div {
			width: 40%;
		}
	}
</style>
