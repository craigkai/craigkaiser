import supabase from "./supabase";

export function help() {
    return `
    <p>Commands:</p>
    <p>&nbsp;&nbsp;--quote: Get a random quote that I like!</p>`;
}

export async function getProjects() {
    return await supabase.from('projects').select('*');
}

export async function getUniqueViews() {
    return await supabase.from('distinct_visitors').select('*', { count: 'exact', head: true });
}
