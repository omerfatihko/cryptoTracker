<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import type { DateValue } from "@internationalized/date";
	import { Label } from "$lib/components/ui/label";
    import { Input } from "$lib/components/ui/input";

    export let cyrptoName: string;
    export let cyrptoSymbol: string;
    export let currency: "USDT" | "TRY";
    export let date: DateValue;
    //export let buyAmount: number;

</script>

<Card.Root class="w-[280px]"> 
    <Card.Header> 
        <Card.Title>{cyrptoName} - {cyrptoSymbol}</Card.Title>
        <Card.Description>Date of buy: {date}</Card.Description>
    </Card.Header>
    <Card.Content> 
        <form>
            <div class="grid w-full items-center gap-4">
                <div class="flex flex-col space-y-1.5">
                    <Label for="amount">Enter buy amount in {currency}</Label>
                    <Input id="amount" placeholder="Enter amount" type="number" /> <!-- bind:value={buyAmount} -->
                </div>
            </div>
        </form>
    </Card.Content>
</Card.Root>
