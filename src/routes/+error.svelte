<script>
	import { page } from '$app/stores';
</script>

<main>
	<h1>
		{$page.status}
		<br />
		{$page.error?.message}
	</h1>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding-left: 1em;
	}
</style>
