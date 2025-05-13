<script>
	import '../app.css';
	import Welcome from '$lib/components/Welcome.svelte';
	import DescAndImageLayout from '$lib/components/DescAndImageLayout.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="flex min-h-screen w-screen flex-col items-center justify-start gap-5">
	<Header />
	<Welcome />
	<DescAndImageLayout />
</div>

<style lang="postcss">
	:global(p, h1, h2, li, h3, h6, div) {
		font-family: 'Courier New', Courier, monospace;
	}

	:global(body) {
		background-color: transparent;
	}
</style>
