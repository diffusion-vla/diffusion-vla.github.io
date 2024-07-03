<script>
	import { base } from '$app/paths';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	export let renderVideos = false;

	const videoNames = [
		'tennis',
		'mug',
		'drawer',
		'box',
		'transfer_bread',
		'stack_cube'
	];

	const videoData = videoNames.map((name) => ({
		src: `videos/origin_tasks/${name}.mp4`,
		image_src: `videos/origin_tasks/${name}.png`,
		text: name.replaceAll('-', ' ')
	}));

	let renderVideo = Array(videoData.length).fill(false);

	function handleVisible(e) {
		renderVideo[e.detail.Slide.index] = true;
	}

	function handleHidden(e) {
		renderVideo[e.detail.Slide.index] = false;
	}
</script>

<div class="w-full flex justify-center" id="container">
	<Splide
		options={{
			perPage: 3,
			perMove: 1,
			start: 0,
			autoplay: true,
			rewind: true,
			interval: 10000,
			breakpoints: {
				768: {
					perPage: 1
				}
			}
		}}
		on:visible={handleVisible}
		on:hidden={handleHidden}
	>
		{#each videoData as video, i}
			<SplideSlide>
				{#if renderVideos && renderVideo[i]}
					<div class="px-2">
						<div class="rounded-lg overflow-hidden flex justify-center">
							<video
								class="w-full"
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay={true}
								src="{base}/{video.src}"
								poster="{base}/{video.image_src}"
							/>
							<span
								class="absolute bottom-0.5 right-3 bg-slate-100 bg-opacity-85 text-stone-700 text-s px-1 rounded-md"
							>
								5x
							</span>
						</div>
					</div>
				{:else}
					<div class="px-2">
						<div class="rounded-lg overflow-hidden flex justify-center w-full">
							<img class="w-full" autoplay={true} src="{base}/{video.image_src}" />
						</div>
					</div>
				{/if}
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style>
	:global(.splide__pagination__page) {
		background: rgb(51, 51, 51);
	}
	:global(.splide__pagination__page.is-active) {
		background: rgb(185, 85, 85);
	}
</style>
