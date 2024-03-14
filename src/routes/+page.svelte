<script lang='ts'>
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1>Artist Hub</h1>

<h2>
    Showing data from prisma db:
</h2>
<ul>
    {#each data.users as user}
        <li>
            {user.name} - {user.email}
        </li>
    {/each}
</ul>