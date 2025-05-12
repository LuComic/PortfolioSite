<script lang="ts">
	import termnotesPic from '../images/termnotes.png';
	import { slide } from 'svelte/transition';
	import DescriptionModal from './DescriptionModal.svelte';

	let expandedProjects = false;
	let status = false;
	const topic = 'termnotes';
</script>

<DescriptionModal {status} {topic} />
<div
	class="text-container mx-auto flex h-full w-2/3 flex-col items-center justify-start pb-8"
	role="tooltip"
	onmouseenter={() => (expandedProjects = true)}
	onmouseleave={() => (expandedProjects = false)}
>
	<p class="mr-auto mb-3 text-left text-xl font-semibold">Projects</p>
	<p>
		<strong>
			You can see the projects all around the page, but here's a quick overview. (you can also click
			on the pictures to bring up a description)
		</strong>
	</p>

	<ul class="my-2">
		<li class="mb-2 list-disc text-left font-medium">
			<strong>noorteKunst</strong> - first ever big project, with the aim to learn HTML, CSS and Javascript
			and build my student company noorteKunst. Site itself is a art gallery/social media for young starting
			artists, to help them get started and get known in the art industry, grow their portfolio etc.
		</li>
		{#if !expandedProjects}
			<li>...</li>
		{/if}
		{#if expandedProjects}
			<div transition:slide={{ duration: 300, axis: 'y' }}>
				<li class="mb-2 list-disc text-left font-medium">
					<strong>movieSite</strong> - a project in TalTech, where I wanted to learn React and tailwind
					for frontend. It is similar to letterboxd, allowing you to browse movies and series, add them
					to your lists and share them with your friends.
				</li>
				<li class="mb-2 list-disc text-left font-medium">
					<strong>termnotes</strong> - A simpler project than the websites, but one of my
					favourites. It is a note taking app in the terminal, which I created to use my python
					skills and learn about using python in the os system.
					<strong>pipx install terminalnotes</strong>
				</li>
				<li class="mb-2 list-disc text-left font-medium">
					<strong>terminalport</strong> - A very, very basic project which I created just to see how
					easy or difficult it would be to create CLI's using node js. It is a very simple portfolio
					in the terminal. <strong>npm i terminalport</strong>
				</li>
				<li class="list-disc text-left font-medium">
					<strong>This very portfolio</strong> - Made with the goal to learn the basic of svelte, I made
					this portfolio. It has some cool tailwind tied to it, to make the page as fun and cool as possible
					and a sideproject project to tinker and test new tailwind/CSS knowledge on.
				</li>
			</div>
		{/if}
	</ul>
</div>

<button
	class="h-full w-full"
	onclick={() => {
		status = false;
		status = true;
	}}
>
	<img src={termnotesPic} alt="termnotes project" class="w-full object-contain select-none" />
</button>
