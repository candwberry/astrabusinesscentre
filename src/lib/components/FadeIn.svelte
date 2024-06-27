<script>
	import { fade } from 'svelte/transition';

	export let extraDelay = 0;
	let condition = false;
	setTimeout(() => {
		condition = true;
	}, extraDelay + 100);
</script>

{#if condition}
	<div transition:fade={{ delay: 400, duration: 300 }}>
		<slot />
	</div>
{/if}
