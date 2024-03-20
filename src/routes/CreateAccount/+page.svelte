<script lang="ts">
    import { enhance } from '$app/forms';
    import { pageHeader } from '$lib/stores/page';
    import { onMount } from 'svelte';
    import dictionary from '$lib/dictionary/en';
  
    type Event = { preventDefault: () => void; };
    
    onMount(() => {
        pageHeader.set('Create Account');
    });

    let username = '';
    let email = '';

    const submit = async (event: Event) => {
        event.preventDefault();
        console.log(username, email);
    };
</script>

<section class="mx-auto w-5/12">
    <p>Look around, look at what we have. Beauty is everywhere, you only have to look to see it. This painting comes right out of your heart. In life you need colors.</p>
    <form
        class="pt-8 gap-4 grid grid-cols-1"
        method="POST"
        on:submit={submit}
        use:enhance={({ formElement, formData, action, cancel, submitter }) => {
            return async ({ result, update }) => {};
        }}>

        <label class="label" for="name">
            <span>{dictionary['createAccount.username']}</span>
            <input 
                id="username"
                class="input"
                type="text"
                placeholder="Add a username..."
                minlength="4"
                required
                bind:value={username}
            />
        </label>

        <label class="label" for="email">
            <span>{dictionary['createAccount.email']}</span>
            <input 
                id="email"
                class="input"
                type="email"
                placeholder="test@example.com"
                required
                bind:value={email}
            />
        </label>

        <div class="flex justify-end">
            <button class="btn variant-filled-success" type="submit">{dictionary['createAccount.submit']}</button>
        </div>
    </form>
</section>