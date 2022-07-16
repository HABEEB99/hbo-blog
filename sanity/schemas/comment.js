export default {
	name: 'comment',
	title: 'Comment',
	type: 'document',
	fields: [
		{
			name: 'postedBy',
			title: 'Posted By',
			type: 'postedBy',
		},
		{
			name: 'message',
			title: 'Message',
			type: 'string',
		},
	],
};
