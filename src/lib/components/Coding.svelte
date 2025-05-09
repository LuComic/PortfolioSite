<script lang="ts">
	import movieSitePic from '../images/Untitled.png';
	import { slide } from 'svelte/transition';
	import DescriptionModal from './DescriptionModal.svelte';

	let expandedCoding = false;
	let status = false;
	const topic = 'moviesite';
</script>

<DescriptionModal {status} {topic} />
<button
	class="h-full w-full"
	onclick={() => {
		status = false;
		status = true;
	}}
>
	<img src={movieSitePic} alt="StreamList project" class="w-full object-contain" />
</button>
<div
	class="text-container mx-auto flex h-full w-2/3 flex-col items-center justify-start pb-8"
	onmouseenter={() => (expandedCoding = true)}
	onmouseleave={() => (expandedCoding = false)}
	role="tooltip"
>
	<p class="mr-auto mb-3 text-left text-xl font-semibold">Coding</p>
	<ul>
		<li class="mb-2 list-disc text-left font-medium">
			<strong>Python</strong> - For 2 years python programming has been one of my subjects in school,
			so I know it the best.
		</li>
		{#if !expandedCoding}
			<li>...</li>
		{/if}
		{#if expandedCoding}
			<div transition:slide={{ duration: 300, axis: 'y' }}>
				<li class="mb-2 list-disc text-left font-medium">
					<strong>Vanilla HTML, CSS and Javascript</strong> - made the first big project with them, noorteKunst.
					Did the frontend of the website.
				</li>
				<li class="mb-2 list-disc text-left font-medium">
					<strong>React + tailwind</strong> - StreamList was the project I used to learn React and tailwind
					and I would say I got the basics and main logics of each down.
				</li>
				<li class="mb-2 list-disc text-left font-medium">
					<strong>Typescript</strong> - Not the best at it, but did use it for StreamList and will continue
					using it for future projects. The portfolio was also made using it.
				</li>
				<li class="list-disc text-left font-medium">
					<strong>Svelte</strong> - In learning phase and using this portfolio as a basic project for
					it. I just really like the syntax and usage of runes that seems a lot better and simpler than
					React.
				</li>
			</div>
		{/if}
	</ul>
</div>

<style lang="postcss">
	.text-container {
		display: inline-block;
		cursor: pointer;
		min-height: 500px;
	}
</style>
