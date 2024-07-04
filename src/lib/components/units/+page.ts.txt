import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	console.log(params);
	try {
		const resp = await fetch('/units.csv');
		if (resp.ok) {
			const text = await resp.text();
			const rows = text.split('\n').map((row) => row.split(','));
			return {
				rows: rows.slice(1) // Skip header row
			};
		} else {
			throw new Error(`HTTP error! status: ${resp.status}`);
		}
	} catch (error) {
		console.error('Failed to fetch or parse CSV:', error);
		return {
			rows: []
		};
	}
};
