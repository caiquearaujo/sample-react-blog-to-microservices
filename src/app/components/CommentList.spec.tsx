import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentList from './CommentList';

describe('CommentList', () => {
	it('should render a list of posts', () => {
		const comments = [
			{
				id: '1',
				postId: '1',
				author: 'John Doe',
				content: 'This is a comment',
				status: 'approved',
			},
			{
				id: '2',
				postId: '1',
				author: 'Jane Doe',
				content: 'This is another comment',
				status: 'pending',
			},
			{
				id: '3',
				postId: '1',
				author: 'Justin Doe',
				content: 'This is some comment',
				status: 'refused',
			},
		];

		render(<CommentList comments={comments} />);

		const elems = screen.getAllByTestId('comment-card');
		expect(elems).toHaveLength(3);
	});
});
