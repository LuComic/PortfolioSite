<script lang="ts">
	let { status, topic }: { status: boolean; topic: string } = $props();
	import noorteKunstPic from '../images/noortekunstbanner.png';
	import movieSitePic from '../images/moviesitebanner.png';
	import terminalportPic from '../images/terminalportbanner.png';
	import termnotesPic from '../images/termnotesbanner.png';
	import catMemesPic from '../images/catMemesBanner.png';
	import { fly } from 'svelte/transition';
	import { clickToCopy } from '$lib/functions/clickToCopy.js';

	let copied = $state(false);
</script>

{#if status}
	<button
		class="fixed top-0 left-0 grid h-full w-full cursor-default place-items-center overflow-y-auto bg-black/75 p-8"
		on:click|self={() => (status = false)}
	>
		<div
			class="card bg-base-100 relative w-auto max-w-[60vw] shadow-sm select-text"
			transition:fly={{ y: 200, duration: 200 }}
		>
			<figure>
				{#if topic === 'noortekunst'}
					<img src={noorteKunstPic} class="w-full" alt="noorteKunst" />
				{:else if topic === 'moviesite'}
					<img src={movieSitePic} class="w-full" alt="movieSite" />
				{:else if topic === 'termnotes'}
					<img src={termnotesPic} class="w-full" alt="termNotes" />
				{:else if topic === 'terminalport'}
					<img src={terminalportPic} class="w-full" alt="terminalPort" />
				{:else if topic === 'catMemes'}
					<img src={catMemesPic} class="w-full" alt="catMemes" />
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
				{:else if topic === 'catMemes'}
					<h3 class="h6 text-left">HTML, CSS, Javascript</h3>
					<h2 class="h3 bold-text mb-4 text-left">Cat meme generator</h2>
				{/if}
				<p class="mb-4 text-left">
					{#if topic === 'noortekunst'}
						noorteKunst is a web gallery combined with social media aspects for young starting
						artists to start or boost their art jounrey. A simple way to stand out (which is
						basically impossible in social media), grow your portfolio and find fans. Also if you're
						interested in art, noorteKunst is a good way to find young artists and do things that
						you can do on every social media platform - like posts, save them and follow artists.
						(site is right now only in estonian and note that I only made the frontend)
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
					{:else if topic === 'catMemes'}
						First ever project of any kind. Made it at as a funny cat meme generator, to introduce
						myself to HTML, CSS and Javascript. Later changed to a gift to the Nike team I was
						working for.
					{/if}
				</p>
				<h4 class="h4 mb-2 text-left font-bold">Why?</h4>
				<ul class="mb-4 text-left">
					{#if topic === 'noortekunst'}
						<li class="list-disc">Help out starting artists</li>
						<li class="list-disc">Learn the basics of frontend</li>
					{:else if topic === 'moviesite'}
						<li class="list-disc">Make a better and improved version of Letterboxd</li>
						<li class="list-disc">Learn react and tailwind</li>
					{:else if topic === 'catMemes'}
						<li class="list-disc">Make a funny site for a Nike team I was working for</li>
					{:else if topic === 'termnotes'}
						<li class="list-disc">
							Make something faster than regular note taking apps but not so complicated like Doom
							Emacs
						</li>
						<li class="list-disc">Learn python integration with os</li>
					{:else if topic === 'terminalport'}
						<li class="list-disc">Make a cool portfolio easily accessible from the terminal</li>
						<li class="list-disc">See what packages node js has for CLIs</li>
					{/if}
				</ul>
				<ul></ul>
				<div class="card-actions justify-end">
					<p class="btn btn-secondary">
						{#if topic === 'noortekunst'}
							<a href="https://noortekunst.ee" class="w-full font-bold" target="_blank"
								>noortekunst.ee</a
							>
						{:else if topic === 'moviesite'}
							<a href="https://movie-site-gold.vercel.app" class="w-full font-bold" target="_blank">
								movie-site-gold.vercel.app
							</a>
						{:else if topic === 'catMemes'}
							<a
								href="https://lucomic.github.io/Cat-memes/"
								class="w-full font-bold"
								target="_blank"
							>
								https://lucomic.github.io/Cat-memes/
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
