import { PostObject } from '@/types';
import React from 'react';
import PostCard from './PostCard';

export type PostListProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & { posts: Array<PostObject> };

export default function PostList(props: PostListProps) {
	const { posts, ...rest } = props;

	return (
		<div className="post list" {...rest}>
			<h2 className="title-xl">Recent Posts</h2>
			<div className="container-flex-row">
				{posts.map(post => (
					<PostCard data-testid="post-card" key={post.id} {...post} />
				))}
			</div>
		</div>
	);
}
