<script lang="ts">
    import { Banknote } from "lucide-svelte";
    import { Button } from "$lib/components/ui/button";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { cn } from "$lib/utils.js";

/*     const selectUSDT = () => {
        selected = "USDT";
        console.log(selected)
    }

    const selectTRY = () => {
        selected = "TRY";
        console.log(selected)
    } */

    let preventScroll = false;
    export let selected: "USDT" | "TRY" | undefined;
</script>

<DropdownMenu.Root preventScroll={preventScroll}> 
    <DropdownMenu.Trigger asChild let:builder> 
        <Button 
        variant="outline"  
        class={cn(
            "w-[280px] justify-start text-left font-normal",
            !selected && "text-muted-foreground"
        )}
        builders={[builder]}>
            <Banknote class="mr-2 h-4 w-4" />
            {selected ? selected : "Pick the currency used to buy"}
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content> 
        <DropdownMenu.Label>Currencies</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.RadioGroup bind:value={selected}>
            <DropdownMenu.RadioItem value="USDT">USDT</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="TRY">TRY</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
    </DropdownMenu.Content>
</DropdownMenu.Root>

<!-- <DropdownMenu.Item on:click={() => selectUSDT()}>USDT</DropdownMenu.Item>
<DropdownMenu.Item on:click={() => selectTRY()}>TRY</DropdownMenu.Item> -->