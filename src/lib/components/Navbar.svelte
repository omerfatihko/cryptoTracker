<script lang="ts">
    import '@fontsource-variable/orbitron/wght.css';
    import Button from './ui/button/button.svelte';
</script>

<header class= "flex flex-wrap justify-center sm:justify-between">
    <div class=" flex flex-nowrap flex-none">
        <a href="/"><img class="h-10 m-0" src="src/public/Ko-RyptoLogo.jpg" alt="site logo"></a>
        <h1 class="my-0 mx-1.5 p-0 font-black text-4xl inline-block">KORYPTO</h1>
    </div>
    <nav class="grow sm:grow-0">
        <div class="flex justify-center sm:justify-end">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
        </div>
    </nav>
</header>

<style>
    h1 {
        font-family: 'Orbitron Variable', sans-serif;
    }
</style>