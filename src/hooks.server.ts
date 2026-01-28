import supabase from '$lib/supabase';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const clientIP = event.getClientAddress();

	// We only use RLS security here not real auth
	const { error } = await supabase
		.from('visitors')
		.insert([{ ip_address: clientIP }])
		.select();

	if (error) {
		console.error(`Failed to insert visitors: ${JSON.stringify(error)}`);
	}

	const response = await resolve(event);
	return response;
}
