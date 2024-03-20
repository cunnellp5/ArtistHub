<script>
    import { AppBar } from '@skeletonlabs/skeleton';
    import { Icon } from '@steeze-ui/svelte-icon';
	import { Copyright } from '@steeze-ui/tabler-icons';
</script>

<AppBar
    gridColumns="grid-cols-1"
    slotDefault="place-self-center"
    >
    <!-- slotTrail="place-content-end" -->
	<!-- <svelte:fragment slot="lead">
        Left
    </svelte:fragment> -->
    <div class="grid grid-flow-col">
        <Icon src={Copyright} size="24"></Icon>
        {new Date().getFullYear()} Artist<span class="">Hub</span>
    </div>
	<!-- <svelte:fragment slot="trail">
        right
    </svelte:fragment> -->
</AppBar>