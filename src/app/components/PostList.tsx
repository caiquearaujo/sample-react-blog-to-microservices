import React from 'react';
import { connect } from 'react-redux';
import { PostObject } from '@/types';
import { RootState } from '@/store';
import { fetchPosts } from '@/store/posts';
import PostCard from './PostCard';

interface PostListProps {
	posts: PostObject[];
	fetch: () => void;
}

const mapStateToProps = (state: RootState) => ({
	posts: state.posts,
});

const mapDispatchToProps = (dispatch: any) => ({
	fetch: () => dispatch(fetchPosts()),
});

const PostList = (props: PostListProps) => {
	const { posts, fetch } = props;

	React.useEffect(() => {
		fetch();
	}, []);

	const renderedPosts = posts.map(post => (
		<PostCard data-testid="post-card" key={post.id} {...post} />
	));

	return (
		<div className="post list">
			<h2 className="title-xl">Recent Posts</h2>
			<div className="container-flex-row">{renderedPosts}</div>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
