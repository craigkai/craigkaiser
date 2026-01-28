import supabase from './supabase';

export function help() {
	return `
    <p>Commands:</p>
    <p>&nbsp;&nbsp;--quote: Get a random quote that I like!</p>
    <p>&nbsp;&nbsp;--projects: Get a list of my projects/work experience!</p>
    <p>&nbsp;&nbsp;--views: Get number of unique views to this website!</p>`;
}

export function clear() {
	return;
}

export async function projects() {
	return await supabase.from('projects').select('*');
}

export async function views() {
	return await supabase.from('distinct_visitors').select('*', { count: 'exact', head: true });
}

export async function quote() {
	return await supabase.from('quotes').select('*');
}
