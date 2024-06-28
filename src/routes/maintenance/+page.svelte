<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Map from '$lib/components/Map.svelte';
	import maintenance from '$lib/assets/maintenance.svg';
	import type { ActionData } from './$types';
	import { Turnstile } from 'svelte-turnstile';

	export let form: ActionData;
	let success: string | null = $page.url.searchParams.get('success');
	let processing: boolean = false;
	let map: Map;
	let unit: string = '';
	let showModal: boolean = false;

	function handleMapInput(selectedUnit: string) {
		unit = selectedUnit;
		if (showModal) {
			showModal = false;
		}
	}

	function toggleModal() {
		showModal = !showModal;
	}

	page.subscribe((value) => {
		success = value.url.searchParams.get('success');
	});
</script>

<svelte:head>
	<meta name="title" content="Maintenance Request | Astra Business Centre" />
	<meta
		name="description"
		content="Need maintenance for your unit? Submit a request at Astra Business Centre. We'll address your issue promptly. Contact us today!"
	/>
	<title>Maintenance at Astra</title>
</svelte:head>

<main>
	<div class="container">
		<div class="map-column">
			<Map bind:this={map} callback={handleMapInput} />
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
				<h1><img src={maintenance} alt="" /> Got a problem?</h1>
				<h5>
					Give us the details below and we'll sort it out as soon as possible.
				</h5>
				<div style="margin: auto 0;">
					<div class="form-grid">
						<div class="form-field">
							<label for="name">Company</label>
							<input type="text" id="name" name="name" placeholder="C&W Berry" required />
						</div>
						<div class="form-field">
							<label for="email">Email</label>
							<input type="email" id="email" name="email" placeholder="david@cwberry.com" required />
						</div>
					</div>
					<div class="form-field">
						<label for="unit">Unit</label>
						<div class="unit-input">
							<input type="text" id="unit" name="unit" bind:value={unit} readonly required />
							<button type="button" on:click={toggleModal} class="select-unit-btn">Select Unit</button>
						</div>
					</div>
					<div class="form-field">
						<label for="message">Message</label>
						<textarea id="message" name="message" placeholder="The roof has fallen." required></textarea>
					</div>
				</div>
				<div class="form-actions">
					<div id="turnstile-container">
						<Turnstile
							siteKey="0x4AAAAAAAdaq7baunr8wH5G"
							forms={true}
							formsField={'cf-turnstile-response'}
							appearance={"interaction-only"}
						/>
					</div>
					<button type="submit">Send request</button>
				</div>
				<div class="form-status">
					{#if form?.error}
						<p class="error">{form.error}</p>
					{:else if success}
						<p class="success">Request sent successfully! We'll be in touch shortly.</p>
					{:else if processing}
						<p class="processing">Processing...</p>
					{/if}
				</div>
			</form>
		</div>
	</div>
</main>

{#if showModal}
<div class="modal-overlay" on:click={toggleModal}>
	<div class="modal-content" on:click|stopPropagation>
		<Map bind:this={map} callback={handleMapInput} text={false}/>
		<button class="close-modal" on:click={toggleModal}>Close</button>
	</div>
</div>
{/if}

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 92vh; /* Accounting for the 8vh navbar */
		padding: 0 1rem;
		overflow: hidden;
	}

	.container {
		display: flex;
		width: 100%;
		max-width: 1200px;
		height: 90%;
		background-color: white;
		border-radius: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		color: black;
	}

	.map-column, .form-column {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.map-column {
		padding-bottom: 0;
		text-align: center;
		flex: 1;
		background-color: #f5f5f5;
	}

	.form-column {
		flex: 2;
		overflow-y: auto;
	}

	form {
		display: flex;
		flex-direction: column;
		color: #081535;
		height: 100%;
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
		filter: invert(1);
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
	}

	.form-status > p {
		padding: 0;
		margin-top: 0;
	}

	.error { color: red; }
	.success { color: green; }
	.processing { color: #081535; }

	.unit-input {
		display: flex;
		align-items: center;
	}

	.unit-input input {
		flex-grow: 1;
	}

	.select-unit-btn {
		background-color: #081535;
		color: white;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
		font-size: 0.9rem;
		margin: 0;
		margin-left: 10px;
	}

	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal-content {
		background-color: white;
		padding: 2rem;
		border-radius: 1rem;
		width: 90%;
		max-width: 600px;
		max-height: 80vh;
		overflow-y: auto;
		color: black;
	}

	.close-modal {
		margin-top: 1rem;
		background-color: #ee6925;
		color: white;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
		font-size: 0.9rem;
	}

	@media (min-width: 1025px) {
		.select-unit-btn {
			display: none;
		}
	}

	@media (max-width: 1024px) {
		.map-column {
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
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 480px) {
		main {
			padding: 0.5rem;
		}

		.container {
			height: 95%;
		}

		.map-column, .form-column {
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