<script lang="ts">
	import catPic from '../images/cat-memes.png';
	import { slide } from 'svelte/transition';
	import DescriptionModal from './DescriptionModal.svelte';

	let status = false;
	const topic = 'catMemes';
</script>

<DescriptionModal {status} {topic} />
<button
	class="h-full w-full"
	onclick={() => {
		status = false;
		status = true;
	}}
>
	<img src={catPic} alt="cat meme project" class="w-full object-contain select-none" />
</button>
<div class="text-container mx-auto flex h-full w-2/3 flex-col items-center justify-start pb-8">
	<p class="mr-auto mb-3 text-left text-xl font-semibold">Experiences</p>
	<ul>
		<li class="mb-2 list-disc text-left font-medium">
			<strong>Coding</strong> - Right now, only school. <strong>noorteKunst</strong> was for a student
			business so you could say it was a bigger project I was a part of.
		</li>
		<li class="mb-2 list-disc text-left font-medium">
			<strong>Other work</strong> - summer job at a Nike (summer of 2024).
		</li>
	</ul>
</div>

<style lang="postcss">
	.text-container {
		display: inline-block;
		cursor: pointer;
		min-height: 550px;
	}
</style>
