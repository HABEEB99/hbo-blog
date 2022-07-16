import SanityClient from '@sanity/client';

const client = SanityClient({
	projectId: '7p0p1h5y',
	dataset: 'production',
	apiVersion: '2022-15-07',
	useCdn: false,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export default client;
