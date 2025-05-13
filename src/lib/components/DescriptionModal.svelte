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
		class="fixed top-0 left-0 flex h-full w-full cursor-default items-center justify-center bg-black/75"
		on:click|self={() => (status = false)}
	>
		<div
			class="card bg-base-100 w-auto max-w-[60vw] shadow-sm select-text"
			transition:fly={{ y: 200, duration: 200 }}
		>
			<figure>
				{#if topic === 'noortekunst'}
					<img src={noorteKunstPic} class="w-full object-cover" alt="noorteKunst" />
				{:else if topic === 'moviesite'}
					<img src={movieSitePic} class="w-full object-cover" alt="noorteKunst" />
				{:else if topic === 'termnotes'}
					<img src={termnotesPic} class="w-full object-cover" alt="noorteKunst" />
				{:else if topic === 'terminalport'}
					<img src={terminalportPic} class="w-full object-cover" alt="noorteKunst" />
				{/if}
			</figure>
			<div class="card-body gap-0">
				{#if topic === 'noortekunst'}
					<h2 class="h6 text-left">HTML, CSS, Javascript</h2>
					<h3 class="h3 bold-text mb-4 text-left">noorteKunst</h3>
				{:else if topic === 'moviesite'}
					<h2 class="h6 text-left">React + tailwind</h2>
					<h3 class="h3 bold-text mb-4 text-left">StreamList</h3>
				{:else if topic === 'termnotes'}
					<h2 class="h6 text-left">Python</h2>
					<h3 class="h3 bold-text mb-4 text-left">termnotes</h3>
				{:else if topic === 'terminalport'}
					<h3 class="h6 text-left">Node js</h3>
					<h2 class="h3 bold-text mb-4 text-left">terminalport</h2>
				{/if}
				<p class="mb-4 text-left">
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
				<div class="card-actions justify-end">
					<p class="btn btn-secondary">
						{#if topic === 'noortekunst'}
							<a href="noortekunst.ee" class="w-full font-bold" target="_blank">noortekunst.ee</a>
						{:else if topic === 'moviesite'}
							<a href="https://movie-site-gold.vercel.app" class="w-full font-bold" target="_blank">
								movie-site-gold.vercel.app
							</a>
						{:else if topic === 'termnotes'}
							<div
								use:clickToCopy
								class="flex w-full cursor-pointer items-center justify-around font-bold"
								on:click={() => {
									copied = true;
									setTimeout(() => (copied = false), 2000);
								}}
							>
								pipx install terminalnotes
								{#if copied}
									Copied
								{/if}
							</div>
						{:else if topic === 'terminalport'}
							<div
								use:clickToCopy
								class="flex w-full cursor-pointer items-center justify-around gap-4 font-bold"
								on:click={() => {
									copied = true;
									setTimeout(() => (copied = false), 3000);
								}}
							>
								npm i terminalport
								{#if copied}
									Copied!
								{/if}
							</div>
						{/if}
					</p>
				</div>
			</div>
		</div>
	</button>
{/if}

<style lang="postcss">
	.bold-text {
		font-weight: bold;
	}
</style>
