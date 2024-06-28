<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
	<!-- We don't want search engines to index error pages -->
	<title>{$page.status} - Astra Business Centre</title>
</svelte:head>
<main>
	<h1>
		<span style="font-size: 4rem;">{$page.status}</span>
		<br />
		{$page.error?.message}
	</h1>
	<p>
		<a href="/">Go back to the home page</a>
	</p>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 1em;
		text-align: center;

		& > p > a {
			color: #ee6925;
		}
	}
</style>
