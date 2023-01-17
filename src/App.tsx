import React from 'react';
import { Provider } from 'react-redux';
import PostCreate from '@/app/components/PostCreate';
import PostList from '@/app/components/PostList';
import store from './store';

export default function App() {
	return (
		<Provider store={store}>
			<main>
				<h1>Blog posts</h1>
				<PostCreate />
				<PostList />
			</main>
		</Provider>
	);
}
