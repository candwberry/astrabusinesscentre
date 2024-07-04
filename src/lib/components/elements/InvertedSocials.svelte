<script lang="ts">
	import EmailIcon from '$lib/assets/svg/socials/email.svelte';
	import InstgramIcon from '$lib/assets/svg/socials/instagram.svelte';
	import TwitterIcon from '$lib/assets/svg/socials/twitter.svelte';
</script>

<div class="socials">
	<a
		href="https://instagram.com/astra_business_centre/"
		target="_blank"
		rel="noopener noreferrer"
		title="Say Hi on Instagram"
	>
		<InstgramIcon />
	</a>
	<a
		href="https://x.com/astra_business/"
		target="_blank"
		rel="noopener noreferrer"
		title="Say Hello on X"
	>
		<TwitterIcon />
	</a>
	<a
		href="mailto:info@astrabusinesscentre.co.uk"
		target="_blank"
		rel="noopener noreferrer"
		title="Send us an email"
	>
		<EmailIcon />
	</a>
</div>

<style lang="scss">
	@import '$lib/assets/css/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text-inverse);
			fill: var(--color--text-inverse);

			&:hover {
				scale: 1.2;
			}
		}
	}
</style>
