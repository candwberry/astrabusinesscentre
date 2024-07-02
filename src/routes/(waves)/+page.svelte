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

<div class="container">
	<Hero />
	<About />
	<Location />
	<Features {features} />
</div>
