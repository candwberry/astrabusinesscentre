<script lang="ts">
	export let color: 'default' | 'primary' | 'secondary' = 'default';
</script>

<strong class={color}><slot /></strong>

<style lang="scss">
	strong {
		&.primary {
			color: var(--color--primary);
		}
		&.secondary {
			color: #ff5500;
		}
	}
</style>
