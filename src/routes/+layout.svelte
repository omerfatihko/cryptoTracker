<script>
	import '../app.pcss';
/* 	import '@fontsource/geist-sans';
	import '@fontsource-variable/orbitron'; */
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from "$lib/components/Footer.svelte";
</script>

<!--header and Navbar that includes language options and dark mode. Also responsive -->
<Navbar/>
<slot />
<Footer/>

<!-- Footer with abouts page link -->

<style>
</style>