<script lang="ts">
	import '../app.pcss';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import Navigation from '$lib/components/Navigation.svelte';
	
	import { pageHeader } from '$lib/stores/page';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navigation />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">side bar</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<svelte:fragment slot="pageHeader">{$pageHeader}</svelte:fragment>

	<slot />

	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>

<style>
</style>