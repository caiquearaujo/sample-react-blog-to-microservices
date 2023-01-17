import { getAllPosts } from '@/app/api';
import { PostObject } from '@/types';
import store from '.';
import { fillPosts, fetchPosts } from './posts';

jest.mock('@/app/api');
const mockedGetAllPosts = getAllPosts as jest.MockedFunction<
	typeof getAllPosts
>;

describe('Post Slice', () => {
	const posts: PostObject[] = [
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
	];

	it('should return the initial state', () => {
		const state = store.getState().posts;
		expect(state).toEqual([]);
	});

	it('should be able to fill posts', async () => {
		const result = store.dispatch(fillPosts(posts));

		expect(result.type).toBe('posts/fillPosts');
		expect(result.payload).toStrictEqual(posts);
		expect(result.payload[0]).toStrictEqual(posts[0]);

		const state = store.getState().posts;
		expect(state).toEqual(posts);
	});

	it('should be able to fetch posts', async () => {
		const result = store.dispatch(fetchPosts());
		expect(result.type).toBe('posts/fetchPosts');
		expect(result.payload).toBeUndefined();
	});

	it('should be able to listen to fetch posts', async () => {
		mockedGetAllPosts.mockResolvedValue(posts);
		store.dispatch(fetchPosts());

		const state = store.getState().posts;
		expect(state).toEqual(posts);

		expect(mockedGetAllPosts).toHaveBeenCalledTimes(1);
	});
});
