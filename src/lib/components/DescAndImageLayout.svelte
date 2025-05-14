<script lang="ts">
	import '../../app.css';
	import About from './About.svelte';
	import Coding from './Coding.svelte';
	import Projects from './Projects.svelte';
	import Socials from './Socials.svelte';
	import Expriences from './Expriences.svelte';
</script>

<div
	class="my-7 grid h-full w-full grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
>
	<About />
	<Coding />
	<Projects />
	<Expriences />
	<Socials />
</div>

<style lang="postcss"></style>
