import { getAllPosts } from '@/app/api';
import { PostObject } from '@/types';
import {
	createListenerMiddleware,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';

// State
export const initialState: PostObject[] = [];

// Reducer
const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		fillPosts: (state, action: PayloadAction<PostObject[]>) =>
			action.payload,
		fetchPosts: (state, action: PayloadAction<undefined>) => state,
	},
});

export const { fillPosts, fetchPosts } = postsSlice.actions;

// Middleware
const postsMiddleware = createListenerMiddleware();

postsMiddleware.startListening({
	actionCreator: fetchPosts,
	effect: async (action, listener) => {
		const posts = await getAllPosts();
		listener.dispatch(fillPosts(posts));
	},
});

export { postsMiddleware };

export default postsSlice.reducer;
