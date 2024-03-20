<script>
    import { pageHeader } from '$lib/stores/page';
	import { onMount } from 'svelte';
    
    onMount(() => {
        pageHeader.set('Home page');
    });
</script>

<h1>hello</h1>

<style></style>
