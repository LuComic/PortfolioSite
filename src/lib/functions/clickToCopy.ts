export function clickToCopy(node: HTMLElement, target?: string): { destroy: () => void } {
	async function copyText(): Promise<void> {
		const text = target
			? (document.querySelector(target) as HTMLElement)?.innerText
			: node.innerText;

		if (!text) {
			node.dispatchEvent(
				new CustomEvent('copyerror', {
					bubbles: true,
					detail: new Error('Target element or text not found')
				})
			);
			return;
		}

		try {
			await navigator.clipboard.writeText(text);

			node.dispatchEvent(
				new CustomEvent('copysuccess', {
					bubbles: true
				})
			);
		} catch (error) {
			node.dispatchEvent(
				new CustomEvent('copyerror', {
					bubbles: true,
					detail: error
				})
			);
		}
	}

	node.addEventListener('click', copyText);

	return {
		destroy() {
			node.removeEventListener('click', copyText);
		}
	};
}
