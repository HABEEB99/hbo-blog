export interface PostsProps {
	_id: string;
	category: string;
	mainImage: {
		asset: {
			url: string;
		};
	};

	body: string;
	slug: string;
	comments: [string];
	upVotes: [string];
	downVotes: [string];
	postedBy: string;
}
