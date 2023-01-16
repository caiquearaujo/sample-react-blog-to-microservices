import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentCard from './CommentCard';

describe('CommentCard', () => {
	it('should render', () => {
		render(
			<CommentCard
				id="abc"
				postId="1"
				author="foo"
				content="bar"
				status="approved"
			/>
		);

		const author = screen.getByTestId('comment-author');
		const content = screen.getByTestId('comment-content');
		const status = screen.getByTestId('comment-status');

		expect(author).toBeInTheDocument();
		expect(author).toHaveTextContent('foo');
		expect(content).toBeInTheDocument();
		expect(content).toHaveTextContent('bar');
		expect(status).toBeInTheDocument();
		expect(status).toHaveTextContent('APPROVED');
		expect(status).toHaveClass('is-approved');
	});

	it('should render pending comment status', () => {
		render(
			<CommentCard
				id="abc"
				postId="1"
				author="foo"
				content="bar"
				status="pending"
			/>
		);

		const content = screen.getByTestId('comment-content');

		expect(content).toBeInTheDocument();
		expect(content).toHaveTextContent(
			'This comment is awaiting moderation'
		);
	});

	it('should render refused comment status', () => {
		render(
			<CommentCard
				id="abc"
				postId="1"
				author="foo"
				content="bar"
				status="refused"
			/>
		);

		const content = screen.getByTestId('comment-content');

		expect(content).toBeInTheDocument();
		expect(content).toHaveTextContent('This comment has been refused');
	});
});
