<script lang="ts">
	let { status, topic }: { status: boolean; topic: string } = $props();
	import noorteKunstPic from '../images/noortekunstbanner.png';
	import movieSitePic from '../images/moviesitebanner.png';
	import terminalportPic from '../images/terminalportbanner.png';
	import termnotesPic from '../images/termnotesbanner.png';
	import { fly } from 'svelte/transition';
	import { clickToCopy } from '$lib/functions/clickToCopy.js';

	let copied = $state(false);
</script>

{#if status}
	<button
		class="fixed top-0 left-0 flex h-full w-full cursor-default items-center justify-center bg-black/80"
		on:click|self={() => (status = false)}
	>
		<div
			class="card border-surface-200-800 divide-surface-200-800 block max-w-xl divide-y overflow-hidden border-[1px] border-none bg-[#FFF7ED]"
			transition:fly={{ y: 200, duration: 200 }}
		>
			<header>
				{#if topic === 'noortekunst'}
					<img src={noorteKunstPic} class="w-full object-cover" alt="noorteKunst" />
				{:else if topic === 'moviesite'}
					<img src={movieSitePic} class="w-full object-cover" alt="noorteKunst" />
				{:else if topic === 'termnotes'}
					<img src={termnotesPic} class="w-full object-cover" alt="noorteKunst" />
				{:else if topic === 'terminalport'}
					<img src={terminalportPic} class="w-full object-cover" alt="noorteKunst" />
				{/if}
			</header>
			<article class="space-y-4 p-4 select-text">
				<div>
					{#if topic === 'noortekunst'}
						<h2 class="h6 text-left">HTML, CSS, Javascript</h2>
						<h3 class="h3 bold-text text-left">noorteKunst</h3>
					{:else if topic === 'moviesite'}
						<h2 class="h6 text-left">React + tailwind</h2>
						<h3 class="h3 bold-text text-left">StreamList</h3>
					{:else if topic === 'termnotes'}
						<h2 class="h6 text-left">Python</h2>
						<h3 class="h3 bold-text text-left">termnotes</h3>
					{:else if topic === 'terminalport'}
						<h2 class="h6 text-left">Node js</h2>
						<h3 class="h3 bold-text text-left">terminalport</h3>
					{/if}
				</div>
				<p class="text-left">
					{#if topic === 'noortekunst'}
						noorteKunst is a web gallery combined with social media aspects for young starting
						artists to start or boost their art jounrey. A simple way to stand out (which is
						basically impossible in social media), grow your portfolio and find fans. Also if you're
						interested in art, noorteKunst is a good way to find young artists and do things that
						you can do on every social media platform - like posts, save them and follow artists.
						(site is right now only in estonian). (Note that I only made the frontend)
					{:else if topic === 'moviesite'}
						A site similar to Letterboxd, but with a new intuitive UI and a more userfriendly
						alternative, with analytics and more. Add movies AND SHOWS (which isn't possible in
						Letterboxd) to either 'Watched' or 'Watchlist', rate them, leave an overview etc. You
						can even create your own groups which you can share with friends, to share what each of
						you likes. (Note that I only made the frontend)
					{:else if topic === 'termnotes'}
						A simple, elegant and yet fast terminal based note taking app! It has all the features
						you might need, like markdown, copying notes, moving them between folders, dailynotes
						etc. If you need something more, then the code is open source and you can add as many
						features as you'd like, since the code is written is basic python!
					{:else if topic === 'terminalport'}
						A very basic 30min project, that is a portfolio about me! It has nice ASCII art and
						options to choose from, like 'About', 'Programming', 'Projects' and 'Socials'.
					{/if}
				</p>
			</article>
			<footer class="flex items-center justify-between gap-4 p-4 select-text">
				<small>
					{#if topic === 'noortekunst'}
						<a href="noortekunst.ee" class="font-bold" target="_blank">noortekunst.ee</a>
					{:else if topic === 'moviesite'}
						<a href="https://movie-site-gold.vercel.app" class="font-bold" target="_blank">
							movie-site-gold.vercel.app
						</a>
					{:else if topic === 'termnotes'}
						<div
							use:clickToCopy
							class="flex cursor-pointer items-center gap-4 font-bold duration-200 hover:text-blue-300"
							on:click={() => {
								copied = true;
								setTimeout(() => (copied = false), 2000);
							}}
						>
							pipx install terminalnotes
							{#if copied}
								<p>Copied!</p>
							{/if}
						</div>
					{:else if topic === 'terminalport'}
						<div
							use:clickToCopy
							class="flex cursor-pointer items-center gap-4 font-bold duration-200 hover:text-blue-300"
							on:click={() => {
								copied = true;
								setTimeout(() => (copied = false), 3000);
							}}
						>
							npm i terminalport
							{#if copied}
								<p>Copied!</p>
							{/if}
						</div>
					{/if}
				</small>
			</footer>
		</div>
	</button>
{/if}

<style lang="postcss">
	.bold-text {
		font-weight: bold;
	}
</style>
