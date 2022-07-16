export default {
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		{
			name: 'category',
			title: 'Category',
			type: 'string',
		},

		{
			name: 'body',
			title: 'Body',
			type: 'string',
		},

		{
			name: 'postedby',
			title: 'Posted By',
			type: 'postedBy',
		},

		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'category',
				maxLength: 96,
			},
		},

		{
			name: 'comments',
			title: 'Comments',
			type: 'array',
			of: [{ type: 'comment' }],
		},

		{
			name: 'upVotes',
			title: 'Up Votes',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'author' }],
				},
			],
		},

		{
			name: 'downVotes',
			title: 'Down Votes',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'author' }],
				},
			],
		},

		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
