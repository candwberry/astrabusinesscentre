<script>
	import Button from '$lib/components/elements/Button.svelte';
	import UnitIcon from '$lib/assets/svg/units.svelte';
	import ContactIcon from '$lib/assets/svg/contact.svelte';
	import Highlight from '../elements/Highlight.svelte';
	import MarkerHighlight from '../elements/MarkerHighlight.svelte';
	import { browser } from "$app/environment";
	let visible = false;

	if (browser) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible = true;
						observer.disconnect(); // Stop observing once visible
					}
				});
			},
			{
				rootMargin: "0px",
				threshold: 0.1, // Trigger when 10% of the section is visible
			},
		);
		try {
		observer.observe(document.getElementById("hero"));
		} catch (error) {
		}
	}
</script>

<section id="hero"
	style="opacity: {visible ? 1 : 0}; transform: translateY({visible
		? 0
		: 30}px); transition: opacity 0.4s ease, transform 0.4s ease;">
	<h1 class="hello">
		<MarkerHighlight color="secondary">Commercial</MarkerHighlight> & <Highlight color="secondary"
			>Industrial</Highlight
		> units<br /> to rent in Preston
	</h1>
	<h2 class="intro">Astra Business Centre, Roman Way, PR2 5AP</h2>
	<div class="ctas">
		<Button color="primary" href="/unit-availability">
			<UnitIcon slot="icon" />
			View Availability
		</Button>
		<Button color="secondary" href="/contact-us">
			<ContactIcon slot="icon" />
			Enquire Now
		</Button>
	</div>
</section>

<style lang="scss">
	@import '$lib/assets/css/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;
		padding: 80px 0;
		color: var(--color--text-inverse);

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.hello {
			text-align: center;
		}

		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			width: min(100%, 600px);
			display: flex;
			text-align: center;
			flex-direction: column;
			margin: 0 0 20px 0;
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 20px;
			width: 100%;
			margin-top: 50px;
		}
	}
</style>
