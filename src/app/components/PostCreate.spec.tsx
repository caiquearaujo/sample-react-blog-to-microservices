import React from 'react';
import axios from 'axios';
import {
	act,
	fireEvent,
	render,
	screen,
	waitFor,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '@/store';
import PostCreate from './PostCreate';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PostCreate', () => {
	it('should display component', () => {
		render(
			<Provider store={store}>
				<PostCreate />
			</Provider>
		);

		expect(screen.getByTestId('post-create-comp')).toBeInTheDocument();
	});

	it('should display/change the title input value', () => {
		render(
			<Provider store={store}>
				<PostCreate />
			</Provider>
		);

		const titleInput = screen.getByTestId('title-input');
		expect(titleInput).toBeInTheDocument();
		expect(titleInput).toHaveValue('');

		fireEvent.change(titleInput, { target: { value: 'My title' } });

		expect(titleInput).toHaveValue('My title');
	});

	it('should display/change the content input value', () => {
		render(
			<Provider store={store}>
				<PostCreate />
			</Provider>
		);

		const contentInput = screen.getByTestId('content-input');
		expect(contentInput).toBeInTheDocument();
		expect(contentInput).toHaveValue('');

		fireEvent.change(contentInput, { target: { value: 'My content' } });

		expect(contentInput).toHaveValue('My content');
	});

	it('should display/change the status select value', () => {
		render(
			<Provider store={store}>
				<PostCreate />
			</Provider>
		);

		const statusSelect = screen.getByTestId('status-input');
		expect(statusSelect).toBeInTheDocument();
		expect(statusSelect).toHaveValue('draft');

		fireEvent.change(statusSelect, { target: { value: 'published' } });

		expect(statusSelect).toHaveValue('published');
	});

	it('should display the alert danger message when empty title', () => {
		render(
			<Provider store={store}>
				<PostCreate />
			</Provider>
		);

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
		render(
			<Provider store={store}>
				<PostCreate />
			</Provider>
		);

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

	it('should submit', async () => {
		mockedAxios.post.mockResolvedValue({
			data: { id: '1' },
		});

		render(
			<Provider store={store}>
				<PostCreate />
			</Provider>
		);

		fireEvent.change(screen.getByTestId('title-input'), {
			target: { value: 'My title' },
		});

		fireEvent.change(screen.getByTestId('content-input'), {
			target: { value: 'My content' },
		});

		const submitButton = screen.getByTestId('submit-button');
		act(() => userEvent.click(submitButton));
		expect(mockedAxios.post).toHaveBeenCalledTimes(1);

		const alertMessage = await waitFor(() =>
			screen.getByTestId('alert-message')
		);

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
