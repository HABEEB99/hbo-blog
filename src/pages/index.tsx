import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { PostsProps } from '../../typings';
import Banner from '../components/banner/Banner';
import PageLayout from '../components/layout/PageLayout';
import Post from '../components/post/Post';
import client from '../lib/client';
import { postsQuery } from '../lib/queries';

type HomeProps = {
	posts: Array<PostsProps>;
};

const Home: React.FC<HomeProps> = ({ posts }) => {
	console.log(posts);
	return (
		<PageLayout title="HOME PAGE" description="The Home Page">
			<Banner />
			<section className="flex flex-col space-y-3 mt-8">
				<h2 className="text-3xl font-bold">Latests Posts</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					{posts.map((post) => (
						<Link key={post._id} href="/posts" passHref>
							<div>
								<Post post={post} />
							</div>
						</Link>
					))}
				</div>
			</section>
		</PageLayout>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const { data } = await axios.get(`http://localhost:3000/api/posts`);

	// const posts = await client.fetch(postsQuery);

	return {
		props: { posts: data },
	};
};
