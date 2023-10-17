/* Load our projects from Supabase Postgres DB
(Because we can)
*/

import supabase from '$lib/supabase';

/** @type {import('./$types').PageLoad} */
export async function load() {
    let res = await supabase.from('projects').select('*');

    if (res.error) {
        console.error(`Failed to retrieve projects :/ : ${JSON.stringify(res.error)}`);
        return {
            projects: []
        };
    }

    return {
        projects: res?.data
    };
}
