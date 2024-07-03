<script>
	import { CollapsibleCard } from 'svelte-collapsible';
	import { browser } from '$app/environment';

	export let isOpen = false;
</script>

{#if browser}
	<CollapsibleCard bind:open={isOpen}>
		<div slot="header" class="header flex items-center">
			<slot name="header" />
			<span class="text-xl ml-2">[<span class="plus text-base">{isOpen ? '−' : '＋'}</span>]</span>
        </div>
		<svelte:fragment slot="body">
			<slot name="body" {isOpen} />
		</svelte:fragment>
	</CollapsibleCard>
{/if}

<style>
	.header:hover .plus {
		text-decoration: underline;
	}

	.plus {
		font-family: 'Roboto Mono', monospace;
	}
</style>