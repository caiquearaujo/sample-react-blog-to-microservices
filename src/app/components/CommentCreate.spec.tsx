import React from 'react';
import {
	fireEvent,
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentCreate from './CommentCreate';

describe('CommentCreate', () => {
	it('should display component', () => {
		render(<CommentCreate postId="1" />);
		expect(
			screen.getByTestId('comment-create-comp')
		).toBeInTheDocument();
	});

	it('should display/change the author input value', () => {
		render(<CommentCreate postId="1" />);
		const titleInput = screen.getByTestId('author-input');
		expect(titleInput).toBeInTheDocument();
		expect(titleInput).toHaveValue('');

		fireEvent.change(titleInput, { target: { value: 'Bruce Wayne' } });

		expect(titleInput).toHaveValue('Bruce Wayne');
	});

	it('should display/change the content input value', () => {
		render(<CommentCreate postId="1" />);
		const contentInput = screen.getByTestId('content-input');
		expect(contentInput).toBeInTheDocument();
		expect(contentInput).toHaveValue('');

		fireEvent.change(contentInput, { target: { value: 'My content' } });

		expect(contentInput).toHaveValue('My content');
	});

	it('should display the alert danger message when empty author', () => {
		render(<CommentCreate postId="1" />);
		const submitButton = screen.getByTestId('submit-button');
		userEvent.click(submitButton);

		const alertMessage = screen.getByTestId('alert-message');
		expect(alertMessage).toBeInTheDocument();
		expect(alertMessage).toHaveClass('alert danger');
		expect(alertMessage).toHaveTextContent(
			'Your name is required, you must to set it before submit.'
		);
	});

	it('should display the alert danger message when empty content', () => {
		render(<CommentCreate postId="1" />);
		fireEvent.change(screen.getByTestId('author-input'), {
			target: { value: 'Bruce Wayne' },
		});

		const submitButton = screen.getByTestId('submit-button');
		userEvent.click(submitButton);

		const alertMessage = screen.getByTestId('alert-message');
		expect(alertMessage).toBeInTheDocument();
		expect(alertMessage).toHaveClass('alert danger');
		expect(alertMessage).toHaveTextContent(
			'Content is required, you must to set it before submit.'
		);
	});

	it('should display/hide the alert info message when submitted', async () => {
		render(<CommentCreate postId="1" />);
		fireEvent.change(screen.getByTestId('author-input'), {
			target: { value: 'Bruce Wayne' },
		});

		fireEvent.change(screen.getByTestId('content-input'), {
			target: { value: 'My content' },
		});

		const submitButton = screen.getByTestId('submit-button');
		userEvent.click(submitButton);

		const alertMessage = screen.getByTestId('alert-message');
		expect(alertMessage).toBeInTheDocument();
		expect(alertMessage).toHaveClass('alert message');
		expect(alertMessage).toHaveTextContent(
			'Comment created successfully.'
		);

		await waitForElementToBeRemoved(
			() => screen.queryByTestId('alert-message'),
			{ timeout: 6000 }
		);

		expect(screen.queryByTestId('alert-message')).toBeNull();
	});
});
