<script lang="ts">
    import '@fontsource-variable/orbitron/wght.css';
    import Button from './ui/button/button.svelte';
    import { Separator } from "$lib/components/ui/separator";
    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";
    import { toggleMode } from "mode-watcher";
</script>

<header class= "flex flex-wrap justify-center sm:justify-between">
    <div class=" flex flex-nowrap flex-none">
        <a href="/"><img class="h-10 m-0" src="src/public/Ko-RyptoLogo.jpg" alt="site logo"></a>
        <h1 class="my-0 mx-1.5 p-0 font-black text-4xl inline-block">KORYPTO</h1>
    </div>
    <nav class="grow sm:grow-0">
        <div class="flex justify-center sm:justify-end">
            <Button variant="ghost" href="/">Home</Button>
            <Button variant="ghost" href="/about">About</Button>
            <Button on:click={toggleMode} variant="ghost" size="icon">
                <Sun
                  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Moon
                  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
            </Button>
        </div>
    </nav>
</header>
<Separator class="my-2"/>

<style>
    h1 {
        font-family: 'Orbitron Variable', sans-serif;
    }
</style>