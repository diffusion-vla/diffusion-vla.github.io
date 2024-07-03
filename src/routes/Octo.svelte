<script>
	import { base } from '$app/paths';
	export let reverse = false;
</script>

{#if reverse}
	<img
		src="{base}/octo.png"
		alt="octo"
		class="h-[1em] inline align-[-0.1em]"
	/>&puncsp;Octo
{:else}
	Octo&puncsp;<img src="{base}/octo.png" alt="octo" class="h-[1em] inline align-[-0.1em]" />
{/if}
