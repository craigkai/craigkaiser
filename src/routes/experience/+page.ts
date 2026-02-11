/* Load our projects from Supabase Postgres DB
(Because we can)
*/

import { projects } from '$lib/commands';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const { data, error } = await projects();

	if (error) {
		console.error(`Failed to retrieve projects: ${JSON.stringify(error)}`);
		return {
			projects: []
		};
	}

	return {
		projects: data.sort((a, b) => {
			return a.sort_order - b.sort_order;
		})
	};
}
