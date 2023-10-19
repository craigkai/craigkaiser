/* Load our views from Supabase
*/

import { getUniqueViews } from "$lib/commands";

/** @type {import('./$types').PageLoad} */
export async function load() {
    const { count, error } = await getUniqueViews();

    if (error) {
        console.error(`Failed to retrieve views: ${JSON.stringify(error)}`);
        return {
            viewsCount: 0
        };
    }

    return {
        viewsCount: count
    };
}
