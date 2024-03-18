<script lang="ts">
    import { coinStore } from "$lib/stores/stores";
    import Checkbox from '$lib/components/Checkbox.svelte';
    import CoinCard from "$lib/components/CoinCard.svelte";
    import DatePicker from "$lib/components/DatePicker.svelte";
	import type { DateValue } from "@internationalized/date";
    let date: DateValue | undefined;
</script>

<Checkbox/>
<DatePicker bind:value={date}></DatePicker>
<p>{date}</p>

{#each $coinStore as coin}
    {#if coin.checked}
        <CoinCard title={coin.name}/>
    {/if}
{/each}