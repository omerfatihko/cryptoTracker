<script>
	import '../app.pcss';
	import { ModeWatcher } from "mode-watcher";
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from "$lib/components/Footer.svelte";
</script>

<ModeWatcher />
<!--header and Navbar that includes language options and dark mode. Also responsive -->
<Navbar/>
<slot />
<Footer/>

<!-- Footer with abouts page link -->

<style>
</style>