<!-- +layout.svelte -->
<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Cursor from '$lib/components/Cursor.svelte';

	import { page } from '$app/stores';
</script>

<Navbar />
<Cursor />
<slot />
{#if $page.url.pathname !== "/"}
	<Footer />
{/if}
