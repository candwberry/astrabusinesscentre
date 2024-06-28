<!-- Navbar.svelte -->
<script>
	import logomini from '$lib/assets/logomini.svg';
	import maintenance from '$lib/assets/maintenance.svg';
	let isMenuOpen = false;
	const toggleMenu = () => (isMenuOpen = !isMenuOpen);
</script>

<nav class="navbar">
	<a class="title" href="/">
		<img src={logomini} alt="logo" />
		<h1>Astra Business Centre</h1>
	</a>
	<button class="hamburger" class:open={isMenuOpen} on:click={toggleMenu} aria-label="Toggle menu">
		<span></span>
		<span></span>
		<span></span>
	</button>
	<div class="menu" class:open={isMenuOpen}>
		<ul>
			<li><a href="/" on:click={toggleMenu}>Home</a></li>
			<li><a href="/about" on:click={toggleMenu}>About</a></li>
			<li><a class="contact" href="/enquire" on:click={toggleMenu}>CONTACT US</a></li>
			<li>
				<a class="maintenance" href="/maintenance" on:click={toggleMenu}
					>MAINTENANCE <img src={maintenance} alt="maintenance" /></a
				>
			</li>
		</ul>
	</div>
</nav>

<style>
	img {
		margin: 0;
		padding: 0;
		transition: 0.3s ease;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em 2em;
		height: 8vh;
		min-height: 8vh;
		max-height: 8vh;
	}
	.title {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: white;
	}
	.title img {
		width: 2em;
		height: auto;
	}
	.title h1 {
		padding: 0;
		margin-left: 1em;
		font-size: 1.5em;
		border-bottom: 2px solid #ee6925;
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
		z-index: 101;
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
	.menu {
		display: flex;
		align-items: center;
	}
	.menu ul {
		display: flex;
		gap: 2em;
		padding: 0;
		margin: 0;
	}
	.menu li {
		list-style: none;
	}
	.menu a {
		font-size: 1.25em;
		text-decoration: none;
		color: white;
		transition: 0.3s ease;
	}
	.contact {
		border-radius: 3em;
		border: 2px #ee6925 solid;
		padding: 0.35em 1em;
	}
	.maintenance {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.menu a:hover {
		color: #1196da;
	}
	.menu a.maintenance:hover {
		color: #ee6925;

		& > img {
			filter: invert(42%) sepia(87%) saturate(3600%) hue-rotate(-7deg) brightness(100%)
				contrast(97%);
		}
	}
	.menu a.contact {
		color: white;
		border-bottom-color: #ee6925;
	}
	.contact:hover {
		background-color: #ee6925;
		border-bottom-color: #ee6925;
		color: white;
	}

	@media (max-width: 768px) {
		.title h1 {
			display: none;
		}
	}
	@media (max-width: 1024px) {
		.hamburger {
			display: flex;
		}
		.menu {
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
		}
		.menu.open {
			transform: translateX(0);
		}
		.menu ul {
			flex-direction: column;
			align-items: center;
		}
		.menu li {
			margin: 1em 0;
		}
		.menu a {
			font-size: 1.5em;
		}
	}
</style>
