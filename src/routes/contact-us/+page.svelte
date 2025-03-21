<svelte:head>
	<title>Astra Business Centre - Contact Us</title>
	<meta name="title" content="Astra Business Centre - Contact Us" />
	<meta
		name="description"
		content="To enquire about commercial or industrial units to rent in Preston, please contact us utilising the on-page form."
	/>

	<script type="application/ld+json">
	[{
	"@context": "https://schema.org/",
	"@type": "WebPage",
	"name": "Astra Business Centre - Contact Us",
	"description": "To enquire about commercial or industrial units to rent in Preston, please contact us utilising the on-page form.",
	"image": {
		"@type": "ImageObject",
		"url": "https://www.astrabusinesscentre.co.uk/jpg/astra-business-centre-office-enquire.jpg"
	}
    }]
	</script>
	
</svelte:head>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import type { ActionData } from '$types';
	import Contact from '$lib/assets/svg/contact-big.svelte';
	
	export let form: ActionData;
	let success: string | null = $page.url.searchParams.get('success');
	let processing: boolean = false;

	page.subscribe((value) => {
		success = value.url.searchParams.get('success');
	});
</script>

<main>
	<div class="container2">
		<div class="image-column">
			<enhanced:img id="bigImage" src="/static/jpg/astra-business-centre-office-enquire.jpg" alt="Astra Business Centre" />
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
				<h1><span style="margin-right: 0.6rem;"><Contact /></span>Contact Us</h1>
				<p class="h5">Looking to rent a commercial or industrial unit that is easily accessible to major transport networks in the North West of England? Please utilise the following form to enquire about on-site availability and a member of our team will get back to you shortly.</p>
				<div style="margin: auto 0;">
					<div class="form-grid">
						<div class="form-field">
							<input type="text" id="name" name="name" placeholder="Full Name" required />
						</div>
						<div class="form-field">
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email Address"
								required
							/>
						</div>
					</div>
					<div class="form-field form-field-textarea">
						<textarea
							id="message"
							name="message"
							placeholder="Message"
							required
						/>
					</div>
				</div>
				<div class="form-actions">
					<button class="button size--medium color--secondary style--solid" type="submit">Send Enquiry</button>
				</div>
				<div class="form-status">
					{#if form?.error}
						<p class="error">{form.error}</p>
					{:else if success}
						<p class="success">Email sent successfully, thank you</p>
					{:else if processing}
						<p class="processing">Processing...</p>
					{:else}
						<p style="color: white;">...</p>
					{/if}
				</div>
			</form>
		</div>
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 1rem;
		margin-top: 2%;
		margin-bottom: 4%;
	}

	.container2 {
		display: flex;
		width: 100%;
		max-width: 1200px;
		background-color: white;
		border-radius: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		z-index: 100;
	}

	.image-column,
	.form-column {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.image-column {
		flex: 1;
		background-color: #f5f5f5;
		overflow: hidden;
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
	}

	.form-column {
		flex: 2;
		overflow: visible;
		display: flex;
	}

	#bigImage {
		width: 400px;
		height: 400px;
		border-radius: 1rem;
		object-fit: cover;
		overflow: hidden;
	}

	form {
		display: flex;
		flex-direction: column;
		color: #081535;
		height: 100%;
		overflow-y: auto;
		padding: 4px;
	}

	h1 {
		font-size: 2rem;
		margin: 0 0 0.5rem 0;
		display: flex;
		align-items: center;
	}

	h1 img {
		height: 1.5em;
		margin-right: 0.8rem;
	}

	.h5 {
		font-size: 0.85rem;
		margin: 1rem 0 2rem;
		font-weight: normal;
	}

	.form-grid {
		display: grid;
		grid-template-columns: 1fr;
	}

	.form-field {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}

	input,
	textarea {
		padding: 12px 12px;
		border: 1px solid #ccc;
		border-radius: 1rem;
		font-size: 16px;
		background-color: #f5f5f5;
		box-sizing: border-box;
		width: 100%;
		line-height: 1.2;
		-webkit-appearance: none;
		appearance: none;
		margin-bottom: 2px;
	}

	textarea {
		height: 7rem;
		resize: none;
	}

	/* Specific adjustments for webkit browsers */
	@supports (-webkit-touch-callout: none) {
		input,
		textarea {
			font-size: 16px; /* Prevents zoom on focus in iOS */
		}
	}

	/* For devices with smaller screens */
	@media (max-width: 480px) {
		input,
		textarea {
			padding: 8px 10px;
			font-size: 14px;
		}
	}

	input:active,
	input:focus,
	textarea:active,
	textarea:focus {
		outline: grey auto 1px;
		-webkit-appearance: none;
		appearance: none;
	}

	.form-actions {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.button {
		white-space: nowrap;
		margin: 0 8px;
		--main-color: red;
		--light-color: blue;
		--contrast-color: green;

		-webkit-appearance: none;
		appearance: none;
		cursor: pointer;
		text-decoration: none;
		transition: all 0.2s ease-in-out;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;

		position: relative;

		border: none;
		border-radius: 20px;
		font-weight: 700;

		&.color {
			&--primary {
				--main-color: var(--color--primary-rgb);
				--light-color: var(--color--primary-tint-rgb);
				--contrast-color: var(--color--primary-contrast);
			}
			&--secondary {
				--main-color: var(--color--secondary-rgb);
				--light-color: var(--color--secondary-tint-rgb);
				--contrast-color: var(--color--secondary-contrast);
			}
		}

		&.style {
			&--solid {
				background-color: rgb(var(--main-color));
				color: var(--contrast-color);

				&:hover {
					box-shadow: 0px 0px 1px 7px rgba(var(--main-color), 0.3);
				}
			}
			&--understated {
				background-color: rgb(var(--light-color));
				color: rgb(var(--main-color));

				&:hover {
					box-shadow: 0px 0px 1px 7px rgba(var(--main-color), 0.3);
				}
			}
			&--clear {
				background-color: transparent;
				color: rgb(var(--main-color));

				&:hover {
					background-color: rgb(var(--light-color));
				}
			}
		}

		&.size {
			&--small {
				padding: 5px 10px;
				font-size: 0.75rem;

			}
			&--medium {
				padding: 10px 20px;
				font-size: 1rem;
			}
			&--large {
				padding: 15px 30px;
				font-size: 1.15rem;

				.icon {
					width: 28px;
					height: 28px;
				}
			}
		}
	}

	.form-status {
		font-size: 0.8rem;
		text-align: center;
	}

	.form-status > p {
		padding: 0;
		margin-top: 8px;
	}

	.error {
		color: red;
	}
	.success {
		color: green;
	}
	.processing {
		color: #081535;
	}

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
			gap: 0;
		}

		h1 {
			font-size: 1.5rem;
		}

		.h5 {
			font-size: 0.8rem;
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
			padding: 0 1rem;
		}

		.form-column {
			padding: 1rem;
		}

		h1 {
			font-size: 1.2rem;
		}

		.h5 {
			font-size: 0.8rem;
		}

		input,
		textarea,
		button {
			font-size: 0.8rem;
		}
	}
</style>
