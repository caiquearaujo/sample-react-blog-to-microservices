import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import store from '@/store';
import PostList from './PostList';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PostList', () => {
	it('should render a list of posts', async () => {
		mockedAxios.get.mockResolvedValue({
			data: [
				{
					id: '1',
					title: 'Post 1',
					content: 'This is the content for post 1',
					status: 'published',
					comments: [],
				},
				{
					id: '2',
					title: 'Post 2',
					content: 'This is the content for post 2',
					status: 'published',
					comments: [],
				},
			],
		});

		render(
			<Provider store={store}>
				<PostList />
			</Provider>
		);

		const elems = await waitFor(() =>
			screen.getAllByTestId('post-card')
		);

		expect(mockedAxios.get).toHaveBeenCalledTimes(1);
		expect(elems).toHaveLength(2);
	});
});
