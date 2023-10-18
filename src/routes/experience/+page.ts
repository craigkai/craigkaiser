/* Load our projects from Supabase Postgres DB
(Because we can)
*/

import supabase from '$lib/supabase';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const { data, error } = await supabase.from('projects').select('*');

    if (error) {
        console.error(`Failed to retrieve projects: ${JSON.stringify(error)}`);
        return {
            projects: []
        };
    }
    console.log(data.sort((a, b) => { a.id < b.id }))

    return {
        projects: data.sort((a, b) => { a.id - b.id })
    };
}
