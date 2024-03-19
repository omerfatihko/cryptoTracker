<script lang="ts">
    import { Bitcoin } from "lucide-svelte";
    import { Button } from "$lib/components/ui/button";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { coinStore } from "$lib/stores/stores";

    let preventScroll = false;
    let closeOnItemClick = false;
    const removeAllCoins = () => {
        $coinStore.forEach((coin) => {
            coin.checked = false;
        });
        $coinStore = [...$coinStore];
    }
</script>

<DropdownMenu.Root preventScroll={preventScroll} closeOnItemClick={closeOnItemClick}>
    <DropdownMenu.Trigger asChild let:builder>
        <Button variant="outline" class="w-[280px] justify-start text-left font-normal text-muted-foreground" builders={[builder]}>
            <Bitcoin class="mr-2 h-4 w-4"/>
            Select the cryptocurrencies
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="max-h-[200px] overflow-y-auto"> 
        <DropdownMenu.Group> 
            <DropdownMenu.Item on:click={() => removeAllCoins()}>Remove all coins</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator/>
        {#each $coinStore as coin}
            <DropdownMenu.CheckboxItem bind:checked={coin.checked}>{coin.symbol}</DropdownMenu.CheckboxItem>
        {/each}
    </DropdownMenu.Content>
</DropdownMenu.Root>

