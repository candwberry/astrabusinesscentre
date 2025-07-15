<script lang="ts">
	import Logo from '$lib/components/elements/Logo.svelte';
	import { onMount, onDestroy } from 'svelte';
	import UnitIcon from '$lib/assets/svg/units.svelte';
	import ContactIcon from '$lib/assets/svg/contact.svelte';
	import Home from '$lib/assets/svg/home.svelte';
	import Maintenance from '$lib/assets/svg/maintenance.svelte';

	export let showBackground = false;
	let isMenuOpen = false; 
	let shorthand = true;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
		toggleBodyScroll(isMenuOpen);
	};

	const closeMenu = () => {
		isMenuOpen = false;
		toggleBodyScroll(isMenuOpen);
	};

	function toggleBodyScroll(disable: boolean) {
		if (disable) {
			document.body.style.overflow = 'hidden';
			document.body.style.touchAction = 'none';
		} else {
			document.body.style.overflow = '';
			document.body.style.touchAction = '';
		}
	}

	onMount(() => {
		isMenuOpen = false;
		const mediaQuery = window.matchMedia('(max-width: 767px)');

		const handleTabletChange = (e: MediaQueryListEvent) => {
			if (e.matches) {
				shorthand = true;
			} else {
				shorthand = false;
				toggleBodyScroll(false);
			}
		};

		mediaQuery.addEventListener('change', handleTabletChange);
		handleTabletChange(mediaQuery);

		return () => {
			mediaQuery.removeEventListener('change', handleTabletChange);
		};
	});

	onMount(() => {
		if (window.innerWidth > 767) {
			document.querySelectorAll('.logo').forEach((element) => {
				element.addEventListener('click', (event) => {
					event.preventDefault();
					window.location.href = '/';
				});
			});
		}
	});
</script>

<header class:has-background={showBackground}>
	<nav class="container">
		<a class="logo" href="/" aria-label="Astra Business Centre">
			<Logo {shorthand} />
		</a>
		<div class="links" class:open={isMenuOpen}>
			<div class="linkslinks">
				<a class="hideUntilMobile" id="aa" on:click={toggleMenu} href="/"><div class="hideUntilMobile">
					<Home />
				</div>Home</a>
				<a on:click={closeMenu} href="/unit-availability"><div class="hideUntilMobile">
					<UnitIcon />
				</div>Unit Availability</a>
				<a on:click={closeMenu} href="/contact-us">
				<div class="hideUntilMobile">
					<ContactIcon />
				</div>
					Contact Us</a>
				<a on:click={closeMenu} href="/maintenance">
				<div class="hideUntilMobile">
					<Maintenance />
				</div>
					Maintenance</a>	
			</div>
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
	@import '$lib/assets/css/breakpoints.scss';
	.hideUntilMobile, #aa {
		display: none;
		@include for-phone-only {
			display: flex;
		}
	}

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
		z-index: 9990;
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
		background-color: linear-gradient(
				60deg,
				var(--color--waves-start) 0%,
				var(--color--waves-end) 100%
			);
		position: relative;
		padding: 30px 0;

		@include for-phone-only {
			padding: 20px;
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
					background: linear-gradient(
						60deg,
						#202b67 0%,
						#212d6d 100%
					);
					position: fixed;
					top: 0;
					right: 0;
					height: 100%;
					width: 100%;
					transition: transform 0.3s ease-in-out;
					z-index: 10;
					transform: translateX(100%);
					color: white;
					z-index: 5000;
					font-size: 2rem;
					line-height: 0.5rem;
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

		.linkslinks {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 30px;
			flex-direction: row;

			a {
				@include for-phone-only {
					margin-right: 20px;
					font-size: 1.5rem;
					scale: 1.2;
					&:hover {
						scale: 1.4;
					}
					gap: 10px;	
				}
			}

			@include for-phone-only {
				align-items: stretch;
				flex-direction: column
			}


		}

		.links {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 30px;
			flex-direction: row;

			a {
				display: flex;
				flex-direction: row;
				align-items: center;

				text-decoration: none;

				&:hover {
					scale: 1.2;
				}

				@include for-phone-only {
					margin-right: 20px;
					font-size: 1.5rem;
					scale: 1.1;
					&:hover {
						scale: 1.2;
					}
					gap: 10px;	
				}
			}

			@include for-phone-only {
				align-items: left;
			}
			
		}
		a, a.hideUntilMobile, #aa {
			color: var(--color--text-inverse);
			align-items: left;

		}

	}

	div.hideUntilMobile {
		@include for-phone-only {
			padding-right: 10px;
			border-right: 2px solid #ee6925;
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
