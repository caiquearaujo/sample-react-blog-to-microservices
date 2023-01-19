import axios from 'axios';
import { CommentObject, PostObject } from '@/types';

const QUERY_API_URL = 'http://192.168.0.11:3004';
const POSTS_API_URL = 'http://192.168.0.11:3000';
const COMMENT_API_URL = 'http://192.168.0.11:3001';

const getAllPosts = async (): Promise<Array<PostObject>> => {
	try {
		const { data } = await axios.get(`${QUERY_API_URL}/posts`);

		if (data.status) {
			return [];
		}

		return data;
	} catch (err) {
		return [];
	}
};

const createPost = async (
	post: Omit<PostObject, 'id' | 'comments'>
): Promise<boolean> => {
	try {
		const { data } = await axios.post(`${POSTS_API_URL}/posts`, post);
		return data.id !== undefined;
	} catch (err) {
		return false;
	}
};

const createComment = async (
	postId: string,
	comment: Omit<CommentObject, 'id' | 'status'>
): Promise<boolean> => {
	try {
		const { data } = await axios.post(
			`${COMMENT_API_URL}/posts/${postId}/comments`,
			{ postId, ...comment }
		);
		return data.id !== undefined;
	} catch (err) {
		return false;
	}
};

export {
	getAllPosts,
	createPost,
	createComment,
	QUERY_API_URL,
	POSTS_API_URL,
	COMMENT_API_URL,
};
