<script lang="ts">
    import { coinStore } from "$lib/stores/stores";
    import { Checkbox } from "$lib/components/ui/checkbox";
    import * as Card from "$lib/components/ui/card";
    import Separator from "./ui/separator/separator.svelte";

</script>

<h3 class="m-1 px-10">Kullanmak istediğiniz kripto paraları seçin</h3>
<div class="m-1 px-10 grid grid-cols-2 sm:grid-cols-5 sm:gap-4">
    {#each $coinStore as coin}
        <Card.Root class="hover:brightness-75">
            <Card.Header>
                <Card.Title>{coin.symbol}</Card.Title>
                <Card.Description>{coin.name}</Card.Description>
            </Card.Header>
            <Card.Content>
                <Checkbox bind:checked={coin.checked}/>
            </Card.Content>
        </Card.Root>
    {/each}
</div>
<Separator class="my-2"/>

