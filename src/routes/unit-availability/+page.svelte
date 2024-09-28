
<svelte:head>
	<title>Astra Business Centre - Unit Availability</title>
	<meta name="title" content="Astra Business Centre - Unit Availability" />
	<meta
		name="description"
		content="Searching for commercial and industrial units to rent in Preston? Browse our current availability and enquire today."
	/>
	<script type="application/ld+json">
	[{
		"@context": "https://schema.org/",
		"@type": "WebPage",
		"publisher": {
			"@type": "Organization",
			"name": "Astra Business Centre",
			"url": "https://www.astrabusinesscentre.co.uk/unit-availability"
		},
		"name": "Astra Business Centre - Unit Availability",
		"description": "Searching for commercial and industrial units to rent in Preston? Browse our current availability and enquire today.",
		"primaryImageOfPage": {
			"@type": "ImageObject",
			"url": "https://www.astrabusinesscentre.co.uk/jpg/astra-business-centre-office.jpg"
		}
	}]
	</script>
</svelte:head>

<script lang="ts">
	import activeUnits from "$lib/data/units";
	import Button from "$lib/components/elements/Button.svelte";
</script>

<main>
	<div class="container2">
		{#each activeUnits as unit}
			<div class="unit">
				<enhanced:img src="/static/jpg/astra-business-centre-office.jpg" alt="Astra Business Centre Office" />
				<div style="padding: 0.5rem 1rem; background-color: white; width: 100%; text-align: center;">
					<div>
						<p style="font-weight: 700; font-size: 1rem; padding-bottom: 0.3rem;">No units are currently available</p>
						<p style="font-weight: 600; color: #555">Please check back soon</p>
					</div>
				</div>
				<div style="justify-self: flex-end; justify-content: center; align-items: center; padding-bottom: 1rem; width: 100%;">
					<div class="features">
						{#each (unit.features) as feature}
						<div style="display: flex; flex-direction: row; align-items: center">
							<img src={feature[0]} alt={""} style="width: 30px; height: 30px; margin-right: 0.5rem;" />
							<p style="white-space: nowrap">{feature[1]}</p>
						</div>
						{/each}
					</div>
					<div style="padding: 0 2rem;">
						<Button color="secondary" href="/contact-us">
							Enquire Now
						</Button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>


<style lang="scss">
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 1rem;
		margin-top: 2%;
		margin-bottom: 4%;
	}

	.container2 {
		display: flex;
		width: 100%;
		max-width: 1200px;
		background-color: white;
		border-radius: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		z-index: 100;
        min-height: 61vh;
		background-color: white;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding:  3rem;
		gap: 2rem;
	}

	.unit {
		background-color: #f5f5f5;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}

	img {
		width: 700px;
		height: 292px;
		object-fit: cover;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
	}

	//style="display: flex; flex-direction: row; align-items: center; width: 100%; justify-content: center; padding: 1rem 1rem; gap: 1rem;"
	.features {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		width: 100%;
		justify-content: center;
		padding: 1rem 1rem;
		gap: 1rem;
	}

	@media (max-width: 1023px) {
		.container2 {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 767px) {
		.container2 {
			grid-template-columns: repeat(1, 1fr);
			padding: 2rem;
		}
	}

	@media (max-width: 600px) {
		img {
			height: 200px;
		}
	}
</style>
