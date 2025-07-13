<script lang="ts">
	export let id: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;

	export let align: 'left' | 'top' | 'right' = 'top';
	import { browser } from "$app/environment";
	let visible = false;

	if (browser) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible = true;
						observer.disconnect(); // Stop observing once visible
					}
				});
			},
			{
				rootMargin: "0px",
				threshold: 0.1, // Trigger when 10% of the section is visible
			},
		);
		try {
			observer.observe(document.getElementById(id+"-title-area"));
		} catch (error) {
			console.error("Observer error:", error);
		}
	}
</script>


<section {id} class="content-section {align}" style="opacity: {visible ? 1 : 0}; transform: translateY({visible
		? 0
		: 30}px); transition: opacity 1s ease, transform 1s ease;">
	<div id={id+"-title-area"} class="title-area">
		{#if title || description}
			<div class="text">
				{#if title}
					<h2>
						{title}
					</h2>
				{/if}
				{#if description}
					<p>
						{description}
					</p>
				{/if}
			</div>
		{/if}
		{#if $$slots['button']}
			<div class="button">
				<slot name="button" />
			</div>
		{/if}
	</div>
	<div class="content-area">
		<slot />
	</div>
</section>

<style lang="scss">
	@import "../../assets/css/breakpoints.scss";

	.content-section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;
		padding: 50px 0;

		.title-area {
			flex: 2;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			gap: 15px;

			.text {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 5px;
			}
		}
		.content-area {
			flex: 5;

			display: grid;
			place-items: center;
		}

		@include for-tablet-landscape-up {
			&.left {
				.title-area {
					order: 1;
				}
				.content-area {
					order: 2;
				}
			}
			&.right {
				.title-area {
					order: 2;
				}
				.content-area {
					order: 1;
				}
			}
			&.top {
				flex-direction: column;
				.title-area {
					order: 1;
					max-width: 900px;
				}
				.content-area {
					order: 2;
					width: 100%;
				}
			}
		}
		@include for-tablet-portrait-down {
			flex-direction: column;
		}
	}
</style>
