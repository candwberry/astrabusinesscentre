<script lang="ts">
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import LinkedInIcon from '$lib/icons/socials/linkedin.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import InstgramIcon from '$lib/icons/socials/instagram.svelte';
	import TwitterIcon from '$lib/icons/socials/twitter.svelte';
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
		href="https://github.com/candwberry"
		target="_blank"
		rel="noopener noreferrer"
		title="Check out this website's source code on GitHub"
	>
		<GitHubIcon />
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
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: var(--color--secondary);
				fill: var(--color--secondary);
				filter: drop-shadow(0px 0px 3px var(--color--secondary));
			}
		}
	}
</style>
