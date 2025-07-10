<!-- +layout.svelte 
 This file applies a layout to *all* pages
-->

<script>
	export const prerender = true;
	import '$lib/assets/css/global.scss';
	import Waves from '$lib/components/elements/Waves.svelte';
	import Header from '$lib/components/sections/Header.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';

	import { keywords, siteBaseUrl } from '$lib/data/meta';
</script>

<svelte:head>
	<meta name="keywords" content={keywords.join(', ')} />
</svelte:head>

<Waves />
<Header />

<main>
	<slot />
</main>

<Footer />