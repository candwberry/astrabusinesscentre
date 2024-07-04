<script lang="ts">
	import Card from '$lib/components/elements/Card.svelte';
	import Tag from '$lib/components/elements/Tag.svelte';
	import type { TagType } from '$lib/types';

	export let name: string;
	export let description: string;
	export let image: string;
	export let tags: TagType[] | undefined;
</script>

<Card additionalClass="feature-card">
	<div class="image" slot="image">
		{#if image}
			<enhanced:img src={image} alt="Picture describing the {name} service" />
		{/if}
	</div>
	<div class="content" slot="content">
		<div class="title">
			<span>{name}</span>
		</div>
		<p>{description}</p>
	</div>
	<div class="footer" slot="footer">
		{#if tags && tags.length > 0}
			<div class="tags">
				{#each tags as tag}
					<Tag color={tag.color}>{tag.label}</Tag>
				{/each}
			</div>
		{/if}
	</div>
	<!-- svelte-ignore a11y-missing-attribute -->
	<picture><img src="" alt=""/></picture> <!-- This is needed because we don't want dead CSS to be optomised out. And also enhanced:img turns to picture at build time-->
</Card>

<style lang="scss">
	picture, img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 700;
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

	.footer {
		margin-top: 20px;
	}

	:global(.feature-card .image img) {
		object-fit: cover;
	}
</style>
