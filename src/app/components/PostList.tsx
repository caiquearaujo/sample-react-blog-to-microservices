import React from 'react';
import { PostObject } from '@/types';
import { getAllPosts } from '@/app/api/index';
import PostCard from './PostCard';

export default function PostList() {
	const [posts, setPosts] = React.useState<PostObject[]>([]);

	const fetchPosts = async () => {
		const response = await getAllPosts();
		setPosts(response);
	};

	React.useEffect(() => {
		fetchPosts();
	}, []);

	const renderedPosts = posts.map(post => (
		<PostCard data-testid="post-card" key={post.id} {...post} />
	));

	return (
		<div className="post list">
			<h2 className="title-xl">Recent Posts</h2>
			<div className="container-flex-row">{renderedPosts}</div>
		</div>
	);
}
