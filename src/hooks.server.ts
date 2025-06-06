import { themes } from '$lib/themes.js';

export const handle = async ({ event, resolve }) => {
	const theme = event.cookies.get('theme');

	if (!theme || !themes.includes(theme)) {
		return await resolve(event, {
			transformPageChunk: ({ html }) => {
				return html.replace('data-theme=""', `data-theme="halloween"`);
			}
		});
	}

	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('data-theme=""', `data-theme="${theme}"`);
		}
	});
};
