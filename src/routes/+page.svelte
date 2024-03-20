<script lang="ts">
    import { coinStore } from "$lib/stores/stores";
    import DropdownCoinMenu from '$lib/components/DropdownCoinMenu.svelte';
    import CoinCard from "$lib/components/CoinCard.svelte";
    import DatePicker from "$lib/components/DatePicker.svelte";
    import DropdownCurrencyMenu from "$lib/components/DropdownCurrencyMenu.svelte";
	import type { DateValue } from "@internationalized/date";
   
    let date: DateValue | undefined;
    let currency: "USDT" | "TRY" | undefined;
</script>

<div class="mx-2 flex justify-start gap-2 flex-wrap">
    <DropdownCoinMenu/>
    <DatePicker bind:value={date}></DatePicker>
    <DropdownCurrencyMenu bind:selected={currency}/>
</div>
<p>currency: {currency}</p>

<div class="mx-2 flex justify-start gap-2 flex-wrap">
{#if date}
    {#if currency}
        {#each $coinStore as coin}
            {#if coin.checked}
                <CoinCard cyrptoName={coin.name} cyrptoSymbol={coin.symbol} currency={currency} date={date}/>
            {/if}
        {/each}
    {/if}
{/if}
</div>
<!-- <p>{date}</p> -->

<!-- {#each $coinStore as coin}
    {#if coin.checked}
        <CoinCard title={coin.name}/>
    {/if}
{/each} -->