export async function GET() {
	const pdfs = import.meta.glob('./*.pdf', { as: 'raw' });
	const pdf = pdfs['kaiesr_craig.pdf'];

	return new Response({
		status: 200,
		headers: {
			'Content-type': 'application/pdf',
			'Content-Disposition': 'attachment; filename=kaiser_craig.pdf'
		},
		body: pdf
	});
}
