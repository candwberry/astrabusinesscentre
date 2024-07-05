<svelte:head>
	<title>Astra Business Centre - Commercial Units to Rent in Preston</title>
	<meta name="title" content="Astra Business Centre - Commercial Units to Rent in Preston" />
	<meta name="description" content="Astra Business Centre offers companies spacious, fully secure office and industrial units for lease at economical prices in Preston." />
</svelte:head>

<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Location from '$lib/components/sections/Location.svelte';
	import Features from '$lib/components/sections/Features.svelte';
	import EnquireNow from '$lib/components/sections/EnquireNow.svelte';
	import type { Feature } from '$lib/data/types';

	export let data: {
		features: Feature[];
	};

	let { features } = data;
</script>

<div class="container">
	<Hero />
	<About />
	<hr/>
	<Location />
	<hr/>
	<EnquireNow/>
</div>

<style>
	hr {
		height: 0;
		border: 1px solid #ee6925;
		margin: 16px auto;
	}
</style>