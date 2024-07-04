<!-- +layout.svelte 
 This file applies a layout to *all* pages
-->

<script>
	import '$lib/assets/css/global.scss';
	import Waves from '$lib/components/elements/Waves.svelte';
	import Header from '$lib/components/sections/Header.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';

	import { keywords, siteBaseUrl } from '$lib/data/meta';
</script>

<svelte:head>
	<link rel="canonical" href={siteBaseUrl} />
	<meta name="keywords" content={keywords.join(', ')} />
</svelte:head>

<Waves />
<Header />

<main>
	<slot />
</main>

<Footer />