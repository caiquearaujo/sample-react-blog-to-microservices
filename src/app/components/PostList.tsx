import PostObject from '@/types';
import React from 'react';
import PostCard from './PostCard';

import './PostList.scss';

export type PostListProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & { posts: Array<PostObject> };

export default function PostList(props: PostListProps) {
	const { posts, ...rest } = props;

	return (
		<div className="post list" {...rest}>
			<h2 className="title">Recent Posts</h2>
			<div className="container">
				{posts.map(post => (
					<PostCard data-testid="post-card" key={post.id} {...post} />
				))}
			</div>
		</div>
	);
}
