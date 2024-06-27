<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let targetX: number = 0;
	let targetY: number = 0;
	let width: number = 16;
	let height: number = 16;
	let hover: boolean = false;
	let hoverElement: HTMLElement | null = null;

	const springOptions = { stiffness: 0.1, damping: 0.7 };
	const cursorSpring = spring({ x: 0, y: 0 }, springOptions);

	$: cursorSpring.set({ x: targetX, y: targetY });

	function handleMouseMove(event: MouseEvent) {
		if (!hover) {
			targetX = event.clientX;
			targetY = event.clientY;
		}
	}

	const handleMouseEnter = (event: MouseEvent) => {
		const mouseEvent = event as MouseEvent;
		// Check target is link or button
		if (
			mouseEvent.target instanceof HTMLButtonElement ||
			mouseEvent.target instanceof HTMLAnchorElement
			
		) {
			hoverElement = mouseEvent.target as HTMLElement;
			const rect = hoverElement.getBoundingClientRect();
			if (rect.width / rect.height > 3.5) return; // rectangles dont look good.
			width = rect.width + 24;
			height = rect.height + 24;
			hover = true;
			targetX = rect.left + rect.width / 2;
			targetY = rect.top + rect.height / 2;
		} else if (hover) {
			hover = false;
			width = 16;
			height = 16;
		}
	};

	const handleMouseLeave = () => {
		if (hover) {
			hover = false;
			width = 16;
			height = 16;
		}
	};
</script>

<svelte:window on:mousemove={handleMouseMove} />
<!-- This fires for all elements, but the other method I had did not catch new ones..-->
<svelte:body on:mouseover={handleMouseEnter} on:mouseleave={handleMouseLeave} />

<div
	style="
    transform: translate({$cursorSpring.x}px, {$cursorSpring.y}px); width: {width}px; height: {height}px;
  "
	data-cursor
></div>

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 16px;
		height: 16px;
		translate: -50% -50%;
		background: linear-gradient(120deg, white, white);
		pointer-events: none;
		mix-blend-mode: exclusion;
		background-color: #ee6925;
		transition:
			width 0.2s ease,
			height 0.2s ease;
		animation:
			shape 10s linear alternate infinite,
			size 15s ease infinite;
		z-index: 999;
	}

	@keyframes shape {
		0%,
		100% {
			border-radius: 43% 77% 80% 40% / 40% 40% 80% 80%;
		}
		5% {
			border-radius: 45% 76% 75% 45% / 42% 50% 75% 78%;
		}
		10% {
			border-radius: 48% 74% 70% 50% / 45% 60% 70% 75%;
		}
		15% {
			border-radius: 51% 72% 65% 55% / 48% 70% 65% 72%;
		}
		20% {
			border-radius: 54% 70% 60% 60% / 52% 75% 60% 68%;
		}
		25% {
			border-radius: 57% 68% 55% 65% / 56% 78% 55% 64%;
		}
		30% {
			border-radius: 60% 66% 50% 70% / 60% 80% 50% 60%;
		}
		35% {
			border-radius: 58% 68% 52% 68% / 62% 77% 52% 58%;
		}
		40% {
			border-radius: 55% 70% 55% 65% / 64% 73% 55% 56%;
		}
		45% {
			border-radius: 52% 72% 58% 62% / 66% 69% 58% 54%;
		}
		50% {
			border-radius: 49% 74% 62% 58% / 68% 65% 62% 52%;
		}
		55% {
			border-radius: 46% 76% 66% 54% / 70% 61% 66% 50%;
		}
		60% {
			border-radius: 43% 78% 70% 50% / 72% 57% 70% 48%;
		}
		65% {
			border-radius: 45% 76% 68% 52% / 70% 59% 68% 50%;
		}
		70% {
			border-radius: 48% 74% 65% 55% / 67% 62% 65% 53%;
		}
		75% {
			border-radius: 51% 72% 62% 58% / 64% 65% 62% 56%;
		}
		80% {
			border-radius: 54% 70% 58% 62% / 60% 68% 58% 60%;
		}
		85% {
			border-radius: 52% 72% 61% 59% / 56% 64% 61% 64%;
		}
		90% {
			border-radius: 49% 74% 65% 55% / 52% 60% 65% 68%;
		}
		95% {
			border-radius: 46% 76% 72% 48% / 48% 50% 72% 72%;
		}
	}

	@keyframes size {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}
</style>
