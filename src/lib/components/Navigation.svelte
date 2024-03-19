<script lang="ts">
	import {
		AppBar,
		LightSwitch,
		ListBox,
		ListBoxItem,
		popup,
	} from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	import { Icon } from '@steeze-ui/svelte-icon'
	import { Paint, Dots } from '@steeze-ui/tabler-icons'
	
	let comboboxValue: string;
	
	const popupCombobox: PopupSettings = {
		event: 'click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item',
	};
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <a href="/">
            <Icon src={Paint} size="24px" class="stroke-1"></Icon>
        </a>
    </svelte:fragment>
    (Template)
    <svelte:fragment slot="trail">
        <button class="btn justify-between" use:popup={popupCombobox}>
            <Icon src={Dots} size="24px" class="stroke-1"></Icon>
        </button>
        <div class="card rounded-md w-48 shadow-xl py-2" data-popup="popupCombobox">
            <ListBox rounded="rounded-none">
                <ListBoxItem
                    bind:group={comboboxValue}
                    name="medium"
                    value="movies">
                    Sign in
                    </ListBoxItem>
                <ListBoxItem
                    id="will-close"
                    bind:group={comboboxValue}
                    name="medium"
                    value="television">
                    <a href="/CreateAccount">
                        Create Account
                    </a>
                </ListBoxItem>
                <hr />
                <div class="w-full flex justify-between px-4 py-2">
                    Theme
                    <LightSwitch />
                </div>
            </ListBox>
            <div class="arrow bg-surface-100-800-token" />
        </div>
    </svelte:fragment>
</AppBar>