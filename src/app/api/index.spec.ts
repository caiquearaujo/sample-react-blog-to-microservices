import axios from 'axios';
import {
	getAllPosts,
	createPost,
	createComment,
	POSTS_API_URL,
	QUERY_API_URL,
	COMMENT_API_URL,
} from '.';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Api Endpoints', () => {
	it('should return an array of posts', async () => {
		mockedAxios.get.mockResolvedValue({
			data: [
				{
					id: '2',
					title: 'Post 2',
					content: 'This is the content for post 2',
					status: 'published',
					comments: [],
				},
			],
		});

		const result = await getAllPosts();

		expect(mockedAxios.get).toHaveBeenCalledWith(
			`${QUERY_API_URL}/posts`
		);

		expect(mockedAxios.get).toHaveBeenCalledTimes(1);
		expect(result).toStrictEqual([
			{
				id: '2',
				title: 'Post 2',
				content: 'This is the content for post 2',
				status: 'published',
				comments: [],
			},
		]);
	});

	it('should return an empty array of posts', async () => {
		mockedAxios.get.mockResolvedValue({
			data: { status: 400, message: 'Bad Request' },
		});

		const result = await getAllPosts();

		expect(mockedAxios.get).toHaveBeenCalledWith(
			`${QUERY_API_URL}/posts`
		);

		expect(mockedAxios.get).toHaveBeenCalledTimes(1);
		expect(result).toStrictEqual([]);
	});

	it('should create a new post', async () => {
		mockedAxios.post.mockResolvedValue({
			data: { id: '1' },
		});

		const result = await createPost({
			title: 'Post 1',
			content: 'This is the content for post 1',
			status: 'published',
		});

		expect(mockedAxios.post).toHaveBeenCalledWith(
			`${POSTS_API_URL}/posts`,
			{
				title: 'Post 1',
				content: 'This is the content for post 1',
				status: 'published',
			}
		);

		expect(mockedAxios.post).toHaveBeenCalledTimes(1);
		expect(result).toBe(true);
	});

	it('should return that the new post has not created', async () => {
		mockedAxios.post.mockResolvedValue({
			data: { status: 421, message: 'Unprocessable Entity' },
		});

		const result = await createPost({
			title: 'Post 1',
			content: 'This is the content for post 1',
			status: 'published',
		});

		expect(mockedAxios.post).toHaveBeenCalledWith(
			`${POSTS_API_URL}/posts`,
			{
				title: 'Post 1',
				content: 'This is the content for post 1',
				status: 'published',
			}
		);

		expect(mockedAxios.post).toHaveBeenCalledTimes(1);
		expect(result).toBe(false);
	});

	it('should create a new comment', async () => {
		mockedAxios.post.mockResolvedValue({
			data: { id: '1' },
		});

		const result = await createComment('1', {
			author: 'Author 1',
			content: 'This is the content for comment 1',
		});

		expect(mockedAxios.post).toHaveBeenCalledWith(
			`${COMMENT_API_URL}/posts/1/comments`,
			{
				postId: '1',
				author: 'Author 1',
				content: 'This is the content for comment 1',
			}
		);

		expect(mockedAxios.post).toHaveBeenCalledTimes(1);
		expect(result).toBe(true);
	});

	it('should return that the new comment has not created', async () => {
		mockedAxios.post.mockResolvedValue({
			data: { status: 421, message: 'Unprocessable Entity' },
		});

		const result = await createComment('1', {
			author: 'Author 1',
			content: 'This is the content for comment 1',
		});

		expect(mockedAxios.post).toHaveBeenCalledWith(
			`${COMMENT_API_URL}/posts/1/comments`,
			{
				postId: '1',
				author: 'Author 1',
				content: 'This is the content for comment 1',
			}
		);

		expect(mockedAxios.post).toHaveBeenCalledTimes(1);
		expect(result).toBe(false);
	});
});
