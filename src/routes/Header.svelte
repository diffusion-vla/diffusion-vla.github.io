<script>
	import { slide } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import { createEventDispatcher, onMount } from 'svelte';
	import DiffusionVLA from './dvla.svelte';
	import { base } from '$app/paths';

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
	class="w-full h-screen mb-0 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-500 to-yellow-200 transition-all ease-in-out duration-1000 overflow-hidden relative"
	class:collapsed={!showTitle}
>
	<div class="flex flex-col items-center justify-center">
		<div class="text-container">
			<div class="text text-1">Diffusion-VLA</div>
			<div class="text text-2">Diffusion-VLA</div>
			<div class="text text-3">Diffusion-VLA</div>
		</div>
		<h1 class="leading-tight transition-all duration-1000 font-light mt-80">
			Aligning Vision-Language Models with Diffusion Policy for Visuomotor Learning
		</h1>
	    <div class="lines">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" shape-rendering="auto">
				<defs>
					<path id="line" d="M0 0 L0 100"/>
				</defs>
				<g class="parallax">
					<use xlink:href="#line" x="2%" y="0" stroke="rgba(0, 233, 10, 0.5)" stroke-width="0.4" />
					<!-- <use xlink:href="#line" x="45%" y="0" stroke="rgba(255, 241, 0, 0.5)" stroke-width="0.4" /> -->
					<use xlink:href="#line" x="10%" y="0" stroke="rgba(10, 255, 0, 0.8)" stroke-width="0.4" />
					<use xlink:href="#line" x="20%" y="0" stroke="rgba(10, 245, 0, 0.4)" stroke-width="0.4" />
					<use xlink:href="#line" x="30%" y="0" stroke="rgba(30, 255, 0, 0.7)" stroke-width="0.4" />
					<use xlink:href="#line" x="40%" y="0" stroke="rgba(20, 243, 13, 0.9)" stroke-width="0.4" />
					<use xlink:href="#line" x="50%" y="0" stroke="rgba(40, 255, 0, 0.3)" stroke-width="0.4" />
					<use xlink:href="#line" x="60%" y="0" stroke="rgba(0, 255, 0, 0.4)" stroke-width="0.4" />
					<use xlink:href="#line" x="70%" y="0" stroke="rgba(0, 255, 30, 0.6)" stroke-width="0.4" />
					<use xlink:href="#line" x="80%" y="0" stroke="rgba(0, 255, 20, 0.2)" stroke-width="0.4" />
					<use xlink:href="#line" x="90%" y="0" stroke="rgba(50, 220, 40, 0.7)" stroke-width="0.4" />
					<use xlink:href="#line" x="98%" y="0" stroke="rgba(0, 255, 20, 0.8)" stroke-width="0.4" />
				</g>
			</svg>
		</div>
	</div>
	

</div>
{#if !showTitle}
	<div
		class="bg-gradient-to-b from-yellow-200 to-white flex-col justify-start items-center"
		transition:slide={{ delay: 200, duration: 300, easing: sineInOut }}
	>
		<!-- <svg
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
		</svg> -->

		<h2 class="leading-tight font-medium text-center mt-0 px-2 md:px-8">
			<span class="font-bold" style="color: black"><DiffusionVLA reverse={false} />:</span> Aligning Vision-Language Models with Diffusion Policy for Visuomotor Learning
		</h2>
	</div>
{/if}

<!-- <style>
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
</style> -->
<style>
h1 {
	font-size: min(max(50px, 6vw), 40px);
	color: rgb(29, 30, 28);
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
.text-container {
	position: relative;
	font-family: 'Arial', sans-serif;
	font-size: 150px;
	font-weight: bold;
	color: white;
	width: 70%;
	white-space: nowrap; /* 防止换行 */
	text-align: center; /* 居中对齐 */
}

/* .relative {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
} */

.text-container .text {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	color: transparent; /* 镂空效果 */
}

.text-container .text-3 {
	color: rgba(63, 93, 163, 0.6); /* 蓝色 */
	transform: translate(-10px, -10px);
	-webkit-text-stroke: 2px rgba(63, 93, 163, 0.9); /* 字体边框 */
}

.text-container .text-2 {
	color: rgba(145, 190, 92, 0.6); /* 绿色 */
	transform: translate(0px, 0px);
	-webkit-text-stroke: 2px rgba(145, 190, 92, 0.9); /* 字体边框 */
}

.text-container .text-1 {
	color: rgba(165, 74, 76, 0.6); /* 红色 */
	transform: translate(10px, 10px);
	-webkit-text-stroke: 2px rgba(165, 74, 76, 0.9); /* 字体边框 */
}

.lines {
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.lines svg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.parallax > use {
	animation: move-forever 5s linear infinite;
}

.parallax > use:nth-child(1) {
	animation-delay: -2s;
	animation-duration: 10s;
}

.parallax > use:nth-child(2) {
	animation-delay: -4s;
	animation-duration: 15s;
}

.parallax > use:nth-child(3) {
	animation-delay: -3s;
	animation-duration: 18;
}

.parallax > use:nth-child(4) {
	animation-delay: -1s;
	animation-duration: 20s;
}

.parallax > use:nth-child(5) {
	animation-delay: -5s;
	animation-duration: 8s;
}

.parallax > use:nth-child(6) {
	animation-delay: -7s;
	animation-duration: 5s;
}

.parallax > use:nth-child(7) {
	animation-delay: -1s;
	animation-duration: 13s;
}

.parallax > use:nth-child(8) {
	animation-delay: -8s;
	animation-duration: 7s;
}

.parallax > use:nth-child(9) {
	animation-delay: -9s;
	animation-duration: 20s;
}

.parallax > use:nth-child(10) {
	animation-delay: -10s;
	animation-duration: 14s;
}

@keyframes move-forever {
	0% {
		transform: translateY(-100%);
	}
	100% {
		transform: translateY(100%);
	}
}
</style>
