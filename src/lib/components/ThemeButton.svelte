<script lang="ts">
	import { themes } from '$lib/themes.js';

	let current_theme = $state('halloween');

	$effect(() => {
		if (typeof window !== 'undefined') {
			const theme = window.localStorage.getItem('theme');
			if (theme && themes.includes(theme)) {
				document.documentElement.setAttribute('data-theme', theme);
				current_theme = theme;
			}
		}
	});

	function set_theme(event: Event) {
		const select = event.target as HTMLSelectElement;
		const theme = select.value;
		if (themes.includes(theme)) {
			const one_year = 60 * 60 * 24 * 365;
			window.localStorage.setItem('theme', theme);
			document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Lax`;
			document.documentElement.setAttribute('data-theme', theme);
			current_theme = theme;
		}
	}
</script>

<select
	class="select w-max cursor-pointer font-bold"
	bind:value={current_theme}
	data-choose-theme
	onchange={set_theme}
>
	<option disabled={current_theme !== ''} value="">Theme</option>
	{#each themes as theme}
		<option value={theme} class="text-md font-bold"
			>{#if theme === 'halloween'}Dark{:else}Light{/if}</option
		>
	{/each}
</select>
