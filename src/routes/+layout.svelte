<script lang="ts">
	import '../app.pcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	
	import { pageHeader } from '$lib/stores/page';

	import { Icon } from '@steeze-ui/svelte-icon'
	import { Paint } from '@steeze-ui/tabler-icons'
</script>

<AppShell>
	
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<Icon src={Paint} size="24px" class="stroke-1"></Icon>
			</svelte:fragment>
			(Template)
			<svelte:fragment slot="trail">(actions) <LightSwitch /></svelte:fragment>
		</AppBar>
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