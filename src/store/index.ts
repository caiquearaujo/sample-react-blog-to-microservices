import { PostObject } from '@/types';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducer, { postsMiddleware } from './posts';

export type RootState = {
	posts: PostObject[];
};

const store = configureStore({
	reducer: combineReducers({ posts: postReducer }),
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().prepend(postsMiddleware.middleware),
});

export default store;
