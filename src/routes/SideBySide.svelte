<script>
	import Collapsible from './Collapsible.svelte';
	import { base } from '$app/paths';
	import Octo from './Octo.svelte';

	function lazy(isOpen, path) {
		return isOpen ? `${base}/videos/${path}.mp4` : '';
	}
</script>

<div class="mt-8 md:ml-4 ml-1 text-left">
	<Collapsible>
		<h3 slot="header" class="text-2xl text-left">Expand Side-by-Side Comparison Videos</h3>
		<div slot="body" class="mt-2 flex flex-wrap justify-center items-center" let:isOpen>
			<div class="flex flex-col max-w-[500px] mx-2 py-2">
				<div class="flex justify-center">
					<div class="flex flex-col">
						<div class="text-center pb-1 text-sm"><Octo /></div>
						<div class="rounded-lg overflow-hidden relative">
							<video
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay
								src={lazy(isOpen, 'out_rpt_octo')}
							/>
							<span
								class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md"
							>
								2x
							</span>
						</div>
					</div>
					<div class="flex flex-col pl-1">
						<div class="text-center pb-1 text-sm">
							<a href="https://eai-vc.github.io/">VC-1</a>
						</div>
						<div class="rounded-lg overflow-hidden relative">
							<video
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay
								src={lazy(isOpen, 'out_rpt_vc1')}
							/>
							<span
								class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md"
							>
								2x
							</span>
						</div>
					</div>
					<div class="flex flex-col pl-1">
						<div class="text-center pb-1 text-sm">From Scratch</div>
						<div class="rounded-lg overflow-hidden relative">
							<video
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay
								src={lazy(isOpen, 'out_rpt_scratch')}
							/>
							<span
								class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md"
							>
								2x
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col max-w-[500px] mx-2 py-2">
				<div class="flex justify-center">
					<div class="flex flex-col">
						<div class="text-center pb-1 text-sm"><Octo /></div>
						<div class="rounded-lg overflow-hidden relative">
							<video
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay
								src={lazy(isOpen, 'out_google_octo')}
							/>
							<span
								class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md"
							>
								2x
							</span>
						</div>
					</div>
					<div class="flex flex-col pl-1">
						<div class="text-center pb-1 text-sm">
							RT-1-X
						</div>
						<div class="rounded-lg overflow-hidden relative">
							<video
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay
								src={lazy(isOpen, 'out_google_rt1')}
							/>
							<span
								class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md"
							>
								2x
							</span>
						</div>
					</div>
					<div class="flex flex-col pl-1">
						<div class="text-center pb-1 text-sm">RT-2-X</div>
						<div class="rounded-lg overflow-hidden relative">
							<video
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay
								src={lazy(isOpen, 'out_google_rt2')}
							/>
							<span
								class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md"
							>
								2x
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col max-w-[500px] mx-2 py-2">
				<div class="flex justify-center">
					<div class="flex flex-col">
						<div class="text-center pb-1 text-sm"><Octo /></div>
						<div class="rounded-lg overflow-hidden relative">
							<video
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay
								src={lazy(isOpen, 'out_bridge')}
							/>
							<span
								class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md"
							>
								2x
							</span>
						</div>
					</div>
					<div class="flex flex-col pl-1">
						<div class="text-center pb-1 text-sm">RT-1-X</div>
						<div class="rounded-lg overflow-hidden relative">
							<video
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay
								src={lazy(isOpen, 'out_rt1_bridge')}
							/>
							<span
								class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md"
							>
								2x
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col max-w-[500px] mx-2 py-2">
				<div class="flex justify-center">
					<div class="flex flex-col">
						<div class="text-center pb-1 text-sm"><Octo /></div>
						<div class="rounded-lg overflow-hidden relative">
							<video
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay
								src={lazy(isOpen, 'out_ours_ur5_tiger')}
							/>
							<span
								class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md"
							>
								2x
							</span>
						</div>
					</div>
					<div class="flex flex-col pl-1">
						<div class="text-center pb-1 text-sm">RT-1-X</div>
						<div class="rounded-lg overflow-hidden relative">
							<video
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay
								src={lazy(isOpen, 'out_rt1_ur5_tiger')}
							/>
							<span
								class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md"
							>
								2x
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col max-w-[500px] mx-2 py-2">
				<div class="flex justify-center">
					<div class="flex flex-col">
						<div class="text-center pb-1 text-sm"><Octo /></div>
						<div class="rounded-lg overflow-hidden relative">
							<video
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay
								src={lazy(isOpen, 'out_ours_ur5_cloth')}
							/>
							<span
								class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md"
							>
								2x
							</span>
						</div>
					</div>
					<div class="flex flex-col pl-1">
						<div class="text-center pb-1 text-sm">RT-1-X</div>
						<div class="rounded-lg overflow-hidden relative">
							<video
								disableRemotePlayback
								muted
								webkit-playsinline
								playsinline
								loop
								autoplay
								src={lazy(isOpen, 'out_rt1_ur5_cloth')}
							/>
							<span
								class="absolute bottom-0.5 right-0.5 bg-slate-100 bg-opacity-50 text-stone-700 text-s px-1 rounded-md"
							>
								2x
							</span>
						</div>
					</div>
				</div>
			</div>
		</div></Collapsible
	>
</div>
