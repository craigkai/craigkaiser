/* Load our views from Supabase
*/

import supabase from '$lib/supabase';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const { data, error } = await supabase.from('visitors').select('*');

    if (error) {
        console.error(`Failed to retrieve views: ${JSON.stringify(error)}`);
        return {
            viewsCount: 0
        };
    }

    return {
        viewsCount: data.length
    };
}
