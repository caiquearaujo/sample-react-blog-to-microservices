import React from 'react';
import PostCreate from '@/app/components/PostCreate';
import PostList from '@/app/components/PostList';

export default function App() {
	return (
		<main>
			<h1>Blog posts</h1>
			<PostCreate />
			<PostList />
		</main>
	);
}
