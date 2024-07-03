<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import Location from '$lib/components/organisms/Location.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import type { Feature } from '$lib/utils/types';

	export let data: {
		features: Feature[];
	};

	let { features } = data;
</script>

<svelte:head>
    <title>Astra Business Centre</title>
    <meta name="title" content="Astra Business Centre" />
    <meta name="description" content="Astra Business Centre is a business park located in the heart of the UK. We offer a range of services to help innovators build breakout companies." />
</svelte:head>

<div class="container">
	<Hero />
	<About />
	<hr style="height: 0; border: 1px solid #ee6925; margin: 16px auto; "/>
	<Location />
</div>
