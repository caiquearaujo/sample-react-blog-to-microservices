import React from 'react';
import { render, screen } from '@testing-library/react';
import PostCard from './PostCard';

describe('PostCard', () => {
	it('should render', () => {
		render(
			<PostCard id="abc" title="foo" content="bar" status="draft" />
		);

		const title = screen.getByTestId('title');
		const content = screen.getByTestId('content');
		const status = screen.getByTestId('status');

		expect(title).toBeInTheDocument();
		expect(title).toHaveTextContent('foo');
		expect(content).toBeInTheDocument();
		expect(content).toHaveTextContent('bar');
		expect(status).toBeInTheDocument();
		expect(status).toHaveTextContent('DRAFT');
		expect(status).toHaveClass('is-draft');
	});
});
