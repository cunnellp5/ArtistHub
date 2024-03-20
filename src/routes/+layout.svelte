<script lang="ts">
	// styles
	import '../app.pcss';
	
	// libs
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';

	// stores
	import Navigation from '$lib/components/Navigation.svelte';

	// scripts
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navigation />
	</svelte:fragment>

	<!-- <svelte:fragment slot="sidebarLeft">side bar</svelte:fragment> -->
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	
	<!-- <svelte:fragment slot="pageHeader">page header?</svelte:fragment> -->

	<div class="w-4/5 border-1 mx-auto mt-20">
		<slot />
	</div>

	<!-- <svelte:fragment slot="pageFooter">
		<div class="w-4/5 mx-auto py-4">
			Page Footer
		</div>
	</svelte:fragment> -->
	
	<svelte:fragment slot="footer">
		<!-- <Footer /> -->
	</svelte:fragment>
</AppShell>

<style>
</style>