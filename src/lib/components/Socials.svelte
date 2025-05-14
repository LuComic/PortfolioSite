<script lang="ts">
	import terminalportPic from '../images/terminalport.png';
	import DescriptionModal from './DescriptionModal.svelte';

	let status = false;
	const topic = 'terminalport';
</script>

<DescriptionModal {status} {topic} />
<div class="mx-auto inline-block h-full w-2/3 pb-8">
	<p class="mr-auto mb-3 text-left text-xl font-semibold">Socials</p>
	<ul>
		<li class="mb-2 list-disc text-left font-medium">
			<strong>Instagram</strong> -
			<a href="https://www.instagram.com/lucomic/" target="_blank" class="text-rose-400">LuComic</a>
		</li>
		<li class="mb-2 list-disc text-left font-medium">
			<strong>Github</strong> -
			<a href="https://github.com/LuComic" target="_blank" class="text-rose-400">LuComic</a>
		</li>
		<li class=" list-disc text-left font-medium">
			<strong>Facebook</strong> -
			<a
				href="https://www.facebook.com/profile.php?id=100032004948809"
				target="_blank"
				class="text-rose-400">Lukas Jääger</a
			>
		</li>
	</ul>
</div>
<button
	class="h-full w-full"
	onclick={() => {
		status = false;
		status = true;
	}}
>
	<img
		src={terminalportPic}
		alt="terminalport project"
		class="h-4/5 w-full object-contain select-none"
	/>
</button>
