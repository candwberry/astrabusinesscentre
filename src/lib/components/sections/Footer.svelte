<script>
		import Socials from '$lib/components/elements/InvertedSocials.svelte';
</script>

<footer>
	<div class="content">
		<div class="copyright">
		     <img src="data:image/svg+xml,%3csvg%20version='1.2'%20baseProfile='tiny'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20110%20112'%20overflow='visible'%20xml:space='preserve'%3e%3cg%3e%3cpath%20fill='%23FFFFFF'%20d='M22.57,12.24L76.78,2.18l31.23,16.87c0.08,0.04,0.03,0.15-0.06,0.13l-31.76-9.14%20c-0.14-0.04-0.27,0.05-0.28,0.19l-0.39,49.66l-7.68,1.07v-5.03L42.71,39.69l-20.35,4.29L22.57,12.24z'/%3e%3cpath%20fill='%23FFFFFF'%20d='M49.32,64.19l-0.27,35.07l35.96-8.32l-0.08-28.32c0-0.11,0.12-0.19,0.23-0.16l19.67,5.04l-19.71-9.48%20L49.32,64.19z'/%3e%3cpath%20fill='%23FFFFFF'%20d='M2.67,47.55l40.04-7.87l25.14,16.24l-25.41-8.38c-0.12-0.04-0.25,0.04-0.26,0.17l-0.42,53.34l-39.8,8.77%20L2.67,47.55z'/%3e%3c/g%3e%3c/svg%3e" alt="Astra Business Centre" height="48" width="48" class="svg-center"></a>
		   © 2024 CWBG Ltd - Astra Business Centre
		</div>
		<div class="credits">
			Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer"
				>SvelteKit</a>
		</div>
		<div class="socials">
			<Socials />
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		height: 270px;
		width: 100%;
		background-color: #202b67;


		display: grid;
		grid-template-rows: 120px 1fr;
		color: var(--color--text-inverse);
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 15px;
			font-weight: 600;
			text-align: center;
			margin-top: 50px;
			font-size: 95%;
			color: var(--color--text-inverse);

			.credits {
				font-weight: 400;
				font-size: 90%;
				color: var(--color--text-inverse);
			}

			.socials {
				display: flex;
				align-items: center;
				gap: 20px;
			}
		}

		.svg-center {
				display: block;
                		max-width: 100%;
                		margin: auto;
				margin-top: 50px;
				margin-bottom: 15px;
			}

		a {
			color: var(--color--text-inverse);
			&:hover {
				filter: drop-shadow(0px 0px 0.5px var(--color--text-inverse));
			}
		}
	}
</style>
