<script>
	import Button from '$lib/components/elements/Button.svelte';
	import Error from '$lib/assets/svg/error.svelte';
	import { page } from '$app/stores';
</script>

<main>
	<div class="error-page">
		<div class="container">
			<h1>Oh no! {$page.status ? $page.status : ''}</h1>
			<h2>{$page.error?.message}</h2>
			<div class="svg-wrapper">
				<Error />
			</div>
			<p>It seems like tea was spilled all over this page, and now it can't be displayed.</p>
			<br />
			<Button href="/">Go home</Button>
		</div>
	</div>
</main>

<style lang="scss">
	.error-page {
		background: var(--color--page-background);
		position: relative;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
		text-align: center;

		.svg-wrapper {
			width: 300px;
			margin-top: -60px;
			margin-bottom: -30px;

			:global(svg) {
				filter: drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1));
			}
		}
	}
</style>
