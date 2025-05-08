<script lang="ts">
	import noorteKunstPic from '../images/noortekunst.png';
	import { slide } from 'svelte/transition';
	import DescriptionModal from './DescriptionModal.svelte';

	let expandedAbout = false;
	let status = false;
	const topic = 'noortekunst';
</script>

<DescriptionModal {status} {topic} />
<div
	role="tooltip"
	class="text-container mx-auto flex h-full w-2/3 flex-col items-center justify-start pb-8"
	onmouseenter={() => (expandedAbout = true)}
	onmouseleave={() => (expandedAbout = false)}
>
	<p class="mr-auto mb-3 text-left text-xl font-semibold">About me</p>
	<ul>
		<li class="text-left font-medium">
			<strong>Education</strong>
			<ul class="mt-2">
				<li class="list-disc text-left font-medium">
					I finished middle school from Tallinn Kristiine High School - with 4s and 5s and a diploma
					for representing the school in sports.
				</li>
			</ul>
		</li>
		{#if !expandedAbout}
			<li>...</li>
		{/if}
		{#if expandedAbout}
			<div transition:slide={{ duration: 200, axis: 'y' }}>
				<li class="mb-2 list-disc text-left font-medium">
					Currently I'm in 11th grade at MURG (Tallinn Mustamäe State Gymnasium). Both 10th and 11th
					grades I have also been involved with TalTech University, since I learn programming
					(python) with them.
				</li>
				<li class="text-left font-medium">
					<strong>Hobbies</strong>
					<ul class="my-2">
						<li class="list-disc text-left font-medium">
							Sports - 11 years of track and field and played football and tennis for 4 years.
						</li>
						<li class="list-disc text-left font-medium">
							Music - I play guitar myself and like to fiddle around with a MIDI keyboard, making
							beats in music software.
						</li>
					</ul>
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
	<img src={noorteKunstPic} alt="noorteKunst project" class="w-full object-contain" />
</button>

<style lang="postcss">
	.text-container {
		display: inline-block;
		cursor: pointer;
		min-height: 550px;
	}
</style>
