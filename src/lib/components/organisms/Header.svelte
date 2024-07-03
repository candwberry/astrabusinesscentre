<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import { onMount } from 'svelte';

	export let showBackground = false;
	let isMenuOpen = false;
	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	let shorthand = true;
	// put a watcher for width going to 1024px;
	onMount(() => {
		isMenuOpen = false;
		const mediaQuery = window.matchMedia('(max-width: 767px)');
		const handleTabletChange = (e: any) => {
			if (e.matches) {
				shorthand = true;
			} else {
				shorthand = false;
			}
		};
		mediaQuery.addListener(handleTabletChange);
		handleTabletChange(mediaQuery);
	});
</script>

<header class:has-background={showBackground}>
	<nav class="container">
		<a class="logo" href="/" aria-label="Astra Business Centre">
			<Logo {shorthand} />
		</a>
		<div class="links" class:open={isMenuOpen}>
			<a on:click={toggleMenu} href="/enquire">Contact Us</a>
			<a on:click={toggleMenu} href="/maintenance">Maintenance</a>
			<!--<ThemeToggle />-->
		</div>
		<button
			class="hamburger"
			class:open={isMenuOpen}
			on:click={toggleMenu}
			aria-label="Toggle menu"
		>
			<span />
			<span />
			<span />
		</button>
	</nav>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: space-around;
		width: 2em;
		height: 2em;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 10000;
	}
	.hamburger span {
		width: 2em;
		height: 0.25em;
		background: white;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
	}
	.hamburger.open span:first-child {
		transform: rotate(45deg);
	}
	.hamburger.open span:nth-child(2) {
		opacity: 0;
		scale: 0;
		transform: translateX(20px);
	}
	.hamburger.open span:last-child {
		transform: rotate(-45deg);
	}

	header {
		position: relative;
		padding: 30px 0;

		@include for-phone-only {
			padding: 20px 0;
		}

		&.has-background {
			background: linear-gradient(
				60deg,
				var(--color--waves-start) 0%,
				var(--color--waves-end) 100%
			);
		}

		.container {
			display: flex;
			align-items: center;
			gap: 30px;

			@include for-phone-only {
				justify-content: center;
				align-items: center;
				vertical-align: middle;
				text-align: center;
				.logo {
					justify-content: center;

					margin: 0 auto;
				}

				.links {
					flex-direction: column;
					justify-content: center;
					background: rgba(0, 0, 0, 0.99);
					position: fixed;
					top: 0;
					right: 0;
					height: 100vh;
					width: 100vw;
					transition: transform 0.3s ease-in-out;
					z-index: 10;
					transform: translateX(100%);
					color: white;
					z-index: 5000;
				}

				.links.open {
					transform: translateX(0);
				}
			}
		}

		.logo {
			height: 44px;
			flex: 1;
		}

		a {
			color: var(--color--text-inverse);
		}

		.links {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 30px;

			a {
				text-decoration: none;

				&:hover {
					scale: 1.2;
				}
			}
		}
	}

	@media (max-width: 767px) {
		.hamburger {
			display: flex;
			touch-action: manipulation;
			user-select: none;
			-moz-user-select: none;
			-webkit-user-select: none;
		}
	}
</style>
