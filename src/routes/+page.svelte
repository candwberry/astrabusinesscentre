<!-- /+page.svelte -->
<script lang="ts">
	import office from '$lib/assets/office.jpeg';
	import logomini from '$lib/assets/logomini.svg';
	import security from '$lib/assets/security.webp';
	import background from '$lib/assets/background.png';
	import FadeIn from '$lib/components/FadeIn.svelte';
	import location from '$lib/assets/location.svg';
	import toilet from '$lib/assets/toilet.webp';
	import land from '$lib/assets/land.jpg';
	import maintenance from '$lib/assets/maintenance.png';

	// @ts-expect-error - No official types for this.
	import Carousel from 'svelte-carousel';
	// Carousel does not work server side, so we need to check if we are in a browser environment.
	import { browser } from '$app/environment';

	let carousel: Carousel;
	const handleNextClick = () => {
		carousel.goToNext();
	};
	const handlePrevClick = () => {
		carousel.goToPrev();
	};

	import { onMount } from 'svelte';
	let isMobile: boolean;

	onMount(() => {
		const checkMobile = () => {
		isMobile = window.innerWidth <= 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});
</script>

<svelte:head>
	<title>Astra Business Centre</title>
	<meta title="title" content="Astra Business Centre" />
	<meta
		name="description"
		content="Astra Business Centre is a business park located in the heart of the UK. We offer a range of services to help innovators build breakout companies."
	/>
</svelte:head>

<main>
	<section id="section0">
		<div id="section0-0">
			<a id="title" href="/">
				<h1 style="white-space: no-wrap;">Astra Business Centre</h1>
				<img src={logomini} alt="Logo" />
			</a>
		</div>
		<div id="section0-1">
			<FadeIn>
				<h1>
					Through <span style="color: #ee6925;">Smart</span> Funding, Transformational Results.
				</h1>
			</FadeIn>
			<FadeIn extraDelay={200}>
				<h6>We help innovators build breakout companies.</h6>
			</FadeIn>
			<FadeIn extraDelay={200}>
				<a id="findoutmore" href="#services">Find Out More</a>
			</FadeIn>
		</div>
		<div id="section0-2">
			<FadeIn extraDelay={-200}>
				<img class="main-img special" src={office} alt="office" />
				<svg width="0" height="0">
					<defs>
						<clipPath id="clipPolygon" clipPathUnits="objectBoundingBox">
							<path
								d="
                  M 0.205 0.111 L 0.698 0.020 L 0.982 0.173 C 0.983 0.173 0.982 0.174 0.981 0.174 L 0.693 0.091 C 0.692 0.091 0.690 0.092 0.690 0.093 L 0.687 0.544 L 0.617 0.554 V 0.509 L 0.388 0.361 L 0.203 0.400 L 0.205 0.111
                  M 0.448 0.584 L 0.446 0.902 L 0.773 0.827 L 0.772 0.569 C 0.772 0.568 0.773 0.567 0.774 0.568 L 0.953 0.614 L 0.774 0.528 L 0.448 0.584
                  M 0.024 0.432 L 0.388 0.361 L 0.617 0.509 L 0.386 0.432 C 0.385 0.432 0.383 0.433 0.383 0.434 L 0.380 0.919 L 0.018 0.998 L 0.024 0.432
                "
							/>
						</clipPath>
					</defs>
				</svg>
			</FadeIn>
		</div>
	</section>
	<section
		id="services"
		style="flex-direction: column; display: flex; align-items: center; width: calc(100vw - 1rem - 1px); overflow: hidden; position: relative; justify-content: center;"
	>
		<div
			style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; width: 100%; "
		>
			<div style="padding: 0 4rem;">
				<h1 style="font-size: 3em">Our Services</h1>
			</div>
			<div style="padding: 0 4rem;">
				<button on:click={handlePrevClick}>&lt</button>
				<button on:click={handleNextClick}>&gt</button>
			</div>
		</div>
		<div style="width: 80vw; center; overflow: clip; position: relative;">
			{#if browser}
				<Carousel
					bind:this={carousel}
					arrows={false}
					particlesToShow={1}
					initialPageIndex={0}
					autoplayDuration={10000}
				>
					<div class="carouselItem">
						<img src={background} alt="background" />
						<div>
							<div>
								<img src={location} alt="location" />
							</div>
							<h1>Our Location</h1>
						</div>
					</div>
					<div class="carouselItem" id="security">
						<img src={security} alt="background" />
						<div>
							<div>
								<img src={location} alt="location" />
							</div>
							<h1>Security</h1>
						</div>
					</div>
					<div class="carouselItem" id="toilets">
						<img src={toilet} alt="background" />
						<div>
							<div>
								<img src={location} alt="location" />
							</div>
							<h1>Toilets</h1>
						</div>
					</div>
					<div class="carouselItem" id="toilets">
						<img src={land} alt="background" />
						<div>
							<div>
								<img src={location} alt="location" />
							</div>
							<h1>900 Acre Plot</h1>
						</div>
					</div>
					<div class="carouselItem" id="toilets">
						<img src={maintenance} alt="background" />
						<div>
							<div>
								<img src={location} alt="location" />
							</div>
							<h1>Maintenance</h1>
						</div>
					</div>
				</Carousel>
			{:else}
				<!-- Static replacement for SSR -->
				<div class="carouselItem">
					<img src={background} alt="background" />
					<div>
						<img src={location} alt="location" />
						<h1>Static Slide</h1>
					</div>
				</div>
			{/if}
		</div>
		<div class="grid-splitter">
			<div class="grid-item" style="border-bottom: 1px #d1d1d1 solid;">
				<h1>+£72M</h1>
				<h6>POUNDS DOLLARS</h6>
			</div>
			<div class="grid-item" style="border-bottom: 1px #d1d1d1 solid;">
				<h1>100 ACRES</h1>
				<h6>WOW THAT IS A LOT</h6>
			</div>
			<div class="grid-item" style="border-bottom: 1px #d1d1d1 solid;">
				<h1>SUPER SECURE</h1>
				<h6>THIS YEAR ON SITE</h6>
			</div>
			<div class="grid-item" style="border-bottom: 1px #d1d1d1 solid;">
				<h1>1 MINUTE</h1>
				<h6>RESPONSE TIME</h6>
			</div>
		</div>
	</section>
	<section style="height: 15vh;"></section>
</main>

<style>
	.grid-splitter {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		width: 80vw;
		margin: 0 auto;
		padding: 2rem 0;
		gap: 1.5rem;
	}

	.grid-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		font-size: 2em;
		white-space: nowrap;

		& > h1 {
			margin-bottom: 0;
			color: #ee6925;
		}
	}

	@media (max-width: 768px) {
		.grid-splitter {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}

		.grid-item {
			font-size: 1em;
		}

		.grid-item > h1 {
			font-size: 1.5em;
		}
	}

	@media (max-width: 1024px) {
		.grid-splitter {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}

		.grid-item {
			font-size: 1.5em;
		}

		.grid-item > h1 {
			font-size: 2em;
		}
	}

	button {
		color: black;
		border: none;
		border-radius: 50%;
		font-size: 2rem;
		font-weight: bolder;
		margin: 0 1rem;
		font-family: 'Arial';
		cursor: pointer;
		width: 50px;
		height: 50px;
		&:hover {
			transition: 0.3s ease;
			color: #1196da;
		}
	}

	#services {
		background-color: white;
		color: black;
	}

	#security::before {
		background: rgba(255, 0, 0, 0.075);
	}

	#toilets::before {
		background: rgba(0, 0, 255, 0.075);
	}

	.carouselItem {
		height: 400px;
		display: flex;
		position: relative;
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 400px;
			background: rgba(0, 128, 0, 0.275);
			z-index: 1;
			overflow: hidden;
		}

		& > img {
			overflow: hidden;
			height: 100%;
			width: 100%;
			object-fit: fill;
			transition: 0.3s ease;
			opacity: 0.2;
			padding: 0 4rem;
		}

		&:hover > img {
			opacity: 0.3;
			scale: 1.1;
			overflow: hidden;
		}

		& > div {
			position: absolute;
			top: 0;
			left: 0;
			padding: 2rem 7rem;
			color: black;
			font-size: 2em;
			text-align: left;
			height: calc(100% - 4rem);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: left;

			& > h1 {
				margin-bottom: 0;
			}
		}

		& > div > div {
			display: flex;
			flex-direction: row;
		}

		& > div > div img {
			width: 50px;
			height: auto;
			filter: invert(1);
			top: 0;
			left: 0;
		}
	}

	/* Section 0 */
	#section0 {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 80vh;
		background-size: cover;
		background-position: center;
		color: white;
		padding-bottom: 10vh;
	}

	#section0-0 {
		width: 0%;
	}

	#section0-1 {
		padding: 2em;
		width: calc(60% - 4em);
		align-items: center;
		justify-content: center;
		font-size: 3em;
		position: relative;
	}

	#section0-2 {
		width: calc(40% - 4em);
		padding: 2em;
	}

	#title {
		display: none;
	}

	#findoutmore {
		border: 3px #ee6925 solid;
		color: white;
		padding: 1rem 2rem;
		border-radius: 5px;
		text-decoration: none;
		font-size: 0.5em;
		margin-top: 1em;
	}

	.main-img {
		clip-path: url('#clipPolygon');
		width: 90%;
		height: auto;
		max-width: 90%;
	}

	.special {
		background-color: #ee6925;
		animation: grow 1s forwards;
	}

	@keyframes grow {
		from {
			transform: scale(1) translate(-100%, 0);
		}
		to {
			transform: scale(1.2) translate(0, 0);
		}
	}

	/* Media Queries */
	@media (max-width: 768px) {
		main {
			font-size: 0.5em;
		}
	}

	@media (max-width: 1024px) {
		main {
			font-size: 0.5em;
		}

		#title {
			display: none;
		}
	}

	@media (max-width: 1440px) {
		main {
			font-size: 0.7em;
		}
	}
</style>
