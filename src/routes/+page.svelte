<script>
	import '../app.css';
	import Welcome from '$lib/components/Welcome.svelte';
	import DescAndImageLayout from '$lib/components/DescAndImageLayout.svelte';
</script>

<div class="flex min-h-screen w-screen flex-col items-center justify-start gap-10 pt-10">
	<Welcome />
	<DescAndImageLayout />
</div>

<style lang="postcss">
	:global(html, body) {
		background-color: #f7fee7;
	}
	:global(p, h1, h2, li) {
		font-family: 'Courier New', Courier, monospace;
		color: #1d4ed8;
	}
</style>
