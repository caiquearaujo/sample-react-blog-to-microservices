import React from 'react';
import { render, screen } from '@testing-library/react';
import PostList from './PostList';

describe('PostList', () => {
	it('should render a list of posts', () => {
		const posts = [
			{
				id: '1',
				title: 'Post 1',
				content: 'This is the content for post 1',
				status: 'published',
			},
			{
				id: '2',
				title: 'Post 2',
				content: 'This is the content for post 2',
				status: 'published',
			},
		];

		render(<PostList posts={posts} />);

		const elems = screen.getAllByTestId('post-card');

		expect(elems).toHaveLength(2);
	});
});
