<script lang="ts">
	import '../app.pcss';
	
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { pageHeader } from '$lib/stores/page';

	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navigation />
	</svelte:fragment>

	<!-- <svelte:fragment slot="sidebarLeft">side bar</svelte:fragment> -->
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	
	<svelte:fragment slot="pageHeader">
		<h1 class="h1">
			<span class="bg-gradient-to-br from-blue-400 to-violet-900 bg-clip-text text-transparent box-decoration-clone">
				{$pageHeader}.
			</span>
		</h1>
	</svelte:fragment>

	<div class="w-4/5 border-2 mx-auto">
		<slot />
	</div>

	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>

<style>
</style>