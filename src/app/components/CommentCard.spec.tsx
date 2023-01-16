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
				status="draft"
			/>
		);

		const author = screen.getByTestId('author');
		const content = screen.getByTestId('content');
		const status = screen.getByTestId('status');

		expect(author).toBeInTheDocument();
		expect(author).toHaveTextContent('foo');
		expect(content).toBeInTheDocument();
		expect(content).toHaveTextContent('bar');
		expect(status).toBeInTheDocument();
		expect(status).toHaveTextContent('DRAFT');
		expect(status).toHaveClass('is-draft');
	});
});
