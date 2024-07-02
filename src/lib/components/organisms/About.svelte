<script>
	import Highlight from '$lib/components/molecules/Highlight.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import image from '$lib/assets/office2.jpeg';
</script>

<section id="about">
	<div class="info">
		<h2>
			We love office units and <Highlight color="secondary">businesses!</Highlight>
		</h2>
		<p>
			Discover the unparalleled convenience and security of Astra Business Centre, where your
			business's success is our priority. Elevate your business at Astra Business Centre - where <strong
				>excellence meets opportunity.</strong
			>
		</p>
		<div class="socials">
			<span>Socials:</span>
			<Socials />
		</div>
	</div>
	<div class="image">
		<img class="main-img" src={image} alt="" />
		<svg width="00" height="300">
			<defs>
				<clipPath id="clipPolygon" clipPathUnits="objectBoundingBox">
					<path
						d="M 0.205 0.111 L 0.698 0.020 L 0.982 0.173 C 0.983 0.173 0.982 0.174 0.981 0.174 L 0.693 0.091 C 0.692 0.091 0.690 0.092 0.690 0.093 L 0.687 0.544 L 0.617 0.554 V 0.509 L 0.388 0.361 L 0.203 0.400 L 0.205 0.111 M 0.448 0.584 L 0.446 0.902 L 0.773 0.827 L 0.772 0.569 C 0.772 0.568 0.773 0.567 0.774 0.568 L 0.953 0.614 L 0.774 0.528 L 0.448 0.584 M 0.024 0.432 L 0.388 0.361 L 0.617 0.509 L 0.386 0.432 C 0.385 0.432 0.383 0.433 0.383 0.434 L 0.380 0.919 L 0.018 0.998 L 0.024 0.432"
					/>
				</clipPath>
			</defs>
		</svg>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
	.main-img {
		clip-path: url(#clipPolygon);
		width: 100%;
		height: auto;
		transition: opacity 0.3s ease;
		transform: translate(8px, -4px);
		margin: 0 auto;
	}

	@media (max-width: 767px) {
		.main-img {
			clip-path: none;
			transform: none;
		}
	}

	#about {
		position: relative;
		display: grid;
		grid-template-columns: 500px 250px;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 50px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 10px;
			h2 {
				@include for-phone-only {
					text-align: center;
				}
			}

			p {
				@include for-phone-only {
					text-align: justify;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}

		.socials {
			display: flex;
			align-items: center;
			gap: 15px;

			@include for-phone-only {
				justify-content: center;
				margin-bottom: 10px;
				span {
					display: none;
				}
			}
		}

		.image {
			width: 220px;
			height: 220px;
		}
	}
</style>
