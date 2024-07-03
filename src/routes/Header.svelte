<script>
	import { slide } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import { createEventDispatcher, onMount } from 'svelte';
	import Octo from './Octo.svelte';

	const dispatch = createEventDispatcher();

	let showTitle = true;
	function handleScroll(event) {
		if (showTitle && window.scrollY > 0) {
			showTitle = false;
			dispatch('hideTitle');
		}
	}

	onMount(handleScroll);
</script>

<svelte:window on:scroll={handleScroll} />

<div
	class="w-full h-screen mb-0 flex flex-col items-center justify-center bg-gradient-to-b from-amber-500 to-amber-100 transition-all ease-in-out duration-1000 overflow-hidden relative"
	class:collapsed={!showTitle}
>
	<div class="mx-4 md:mx-16 flex flex-col justify-center pb-32">
		<h1 class="leading-tight transition-all duration-1000 font-light">
			<span class="font-bold"><Octo reverse={true} />:</span> An Open-Source Generalist Robot Policy
		</h1>
	</div>
	<div class="h-32 w-full absolute bottom-0">
		<svg
			class="w-full h-full"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28"
			preserveAspectRatio="none"
			shape-rendering="auto"
		>
			<defs>
				<path
					id="gentle-wave"
					d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
				/>
			</defs>
			<g class="parallax">
				<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(107, 124, 250, 0.7" />
				<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(50, 82, 227, 0.5)" />
				<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(107, 124, 250, 0.3)" />
				<use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(30, 74, 200, 0.8)" />
			</g>
		</svg>
	</div>
</div>

{#if !showTitle}
	<div
		class="bg-gradient-to-b from-amber-200 to-white flex-col justify-start items-center"
		transition:slide={{ delay: 200, duration: 300, easing: sineInOut }}
	>
		<svg
			class="w-full h-32 scale-y-[-1]"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28"
			preserveAspectRatio="none"
			shape-rendering="auto"
		>
			<defs>
				<path
					id="gentle-wave"
					d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
				/>
			</defs>
			<g class="parallax">
				<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(107, 124, 250, 0.7" />
				<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(50, 82, 227, 0.5)" />
				<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(107, 124, 250, 0.3)" />
				<use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(30, 74, 200, 0.8)" />
			</g>
		</svg>

		<h2 class="leading-tight font-medium text-center mt-4 px-2 md:px-8">
			<span class="font-bold"><Octo reverse={true} />:</span> An Open-Source Generalist Robot Policy
		</h2>
	</div>
{/if}

<style>
	h1 {
		font-size: min(max(50px, 6vw), 160px);
	}

	h2 {
		font-size: min(max(50px, 6vw), 3rem);
	}

	.collapsed {
		height: 8rem;
	}

	.collapsed h1 {
		padding-top: 200%;
	}

	/* Animation */

	.parallax > use {
		animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
	}
	.parallax > use:nth-child(1) {
		animation-delay: -2s;
		animation-duration: 7s;
	}
	.parallax > use:nth-child(2) {
		animation-delay: -3s;
		animation-duration: 10s;
	}
	.parallax > use:nth-child(3) {
		animation-delay: -4s;
		animation-duration: 13s;
	}
	.parallax > use:nth-child(4) {
		animation-delay: -5s;
		animation-duration: 20s;
	}
	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}
		100% {
			transform: translate3d(85px, 0, 0);
		}
	}
</style>
