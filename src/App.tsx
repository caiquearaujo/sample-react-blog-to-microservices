import React from 'react';
import PostCreate from '@/app/components/PostCreate';
import PostCard from './app/components/PostCard';

export default function App() {
	return (
		<main>
			<h1>Blog posts</h1>
			<PostCreate />
			<PostCard
				title="My first post"
				content="This is my first post"
				status="published"
			/>
		</main>
	);
}
