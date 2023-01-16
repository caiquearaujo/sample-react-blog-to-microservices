import React from 'react';
import {
	fireEvent,
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostCreate from './PostCreate';

describe('PostCreate', () => {
	it('should display component', () => {
		render(<PostCreate />);
		expect(screen.getByTestId('post-create-comp')).toBeInTheDocument();
	});

	it('should display/change the title input value', () => {
		render(<PostCreate />);
		const titleInput = screen.getByTestId('title-input');
		expect(titleInput).toBeInTheDocument();
		expect(titleInput).toHaveValue('');

		fireEvent.change(titleInput, { target: { value: 'My title' } });

		expect(titleInput).toHaveValue('My title');
	});

	it('should display/change the content input value', () => {
		render(<PostCreate />);
		const contentInput = screen.getByTestId('content-input');
		expect(contentInput).toBeInTheDocument();
		expect(contentInput).toHaveValue('');

		fireEvent.change(contentInput, { target: { value: 'My content' } });

		expect(contentInput).toHaveValue('My content');
	});

	it('should display/change the status select value', () => {
		render(<PostCreate />);
		const statusSelect = screen.getByTestId('status-input');
		expect(statusSelect).toBeInTheDocument();
		expect(statusSelect).toHaveValue('draft');

		fireEvent.change(statusSelect, { target: { value: 'published' } });

		expect(statusSelect).toHaveValue('published');
	});

	it('should display the alert danger message when empty title', () => {
		render(<PostCreate />);
		const submitButton = screen.getByTestId('submit-button');
		userEvent.click(submitButton);

		const alertMessage = screen.getByTestId('alert-message');
		expect(alertMessage).toBeInTheDocument();
		expect(alertMessage).toHaveClass('alert danger');
		expect(alertMessage).toHaveTextContent(
			'Title is required, you must to set it before submit.'
		);
	});

	it('should display the alert danger message when empty content', () => {
		render(<PostCreate />);
		fireEvent.change(screen.getByTestId('title-input'), {
			target: { value: 'My title' },
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
		render(<PostCreate />);
		fireEvent.change(screen.getByTestId('title-input'), {
			target: { value: 'My title' },
		});

		fireEvent.change(screen.getByTestId('content-input'), {
			target: { value: 'My content' },
		});

		const submitButton = screen.getByTestId('submit-button');
		userEvent.click(submitButton);

		const alertMessage = screen.getByTestId('alert-message');
		expect(alertMessage).toBeInTheDocument();
		expect(alertMessage).toHaveClass('alert message');
		expect(alertMessage).toHaveTextContent('Post created successfully.');

		await waitForElementToBeRemoved(
			() => screen.queryByTestId('alert-message'),
			{ timeout: 6000 }
		);

		expect(screen.queryByTestId('alert-message')).toBeNull();
	});
});
