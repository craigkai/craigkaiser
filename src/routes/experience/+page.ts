/* Load our projects from Supabase Postgres DB
(Because we can)
*/

import { getProjects } from '$lib/commands';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const { data, error } = await getProjects();

    if (error) {
        console.error(`Failed to retrieve projects: ${JSON.stringify(error)}`);
        return {
            projects: []
        };
    }

    return {
        projects: data.sort((a, b) => { return a.id - b.id; })
    };
}
