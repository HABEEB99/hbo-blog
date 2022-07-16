import Image from 'next/image';
import React from 'react';
import { PostsProps } from '../../../typings';
import { urlFor } from '../../lib/client';

type PostProps = {
	post: PostsProps;
};

const Post: React.FC<PostProps> = ({ post }) => {
	return (
		<div className="w-[20rem] h-[20rem] bg-bgLight dark:bg-bgDark shadow-md shadow-bgDark dark:shadow-bgLight mt-1 rounded-md cursor-pointer hover:shadow-2xl hover:shadow-bgDark">
			<div className="bg-bgDark dark:bg-bgLight w-full h-12 rounded-t-md">
				<h3>{post.postedBy}</h3>
			</div>
			<div className="flex flex-col items-center">
				<h1 className="text-xl">{post.category}</h1>
				<div className="relative w-60 h-60 ">
					<Image
						src={urlFor(post.mainImage).url()}
						alt="Post Image"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>
		</div>
	);
};
export default Post;
