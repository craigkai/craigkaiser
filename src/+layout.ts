/* Load our views from Supabase
*/

import supabase from '$lib/supabase';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const { count, error } = await supabase.from('distinct_visitors').select('*', { count: 'exact', head: true })

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
