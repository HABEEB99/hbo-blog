import {
	createClient,
	createPortableTextComponent,
	createPreviewSubscriptionHook,
} from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	apiVersion: '2022-07-16',
	useCdn: process.env.NODE_ENV === 'production',
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

if (!config.projectId) {
	throw Error('The Project ID is not set. Check your environment variables.');
}

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const client = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(client).image(source);
export const imageBuilder = (source) =>
	createImageUrlBuilder(config).image(source);

export const previewClient = createClient({
	...config,
	useCdn: false,
});

export const getClient = (usePreview) => (usePreview ? previewClient : client);

export default client;
