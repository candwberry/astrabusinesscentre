<!-- +layout.svelte -->
<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
</script>

<Navbar />
<Cursor />
<slot />
<Footer />
