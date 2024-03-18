<script lang="ts">
    import { coinStore } from "$lib/stores/stores";
    import Checkbox from '$lib/components/Checkbox.svelte';
    import CoinCard from "$lib/components/CoinCard.svelte";

</script>

<Checkbox/>

{#each $coinStore as coin}
    {#if coin.checked}
        <CoinCard title={coin.name}/>
    {/if}
{/each}