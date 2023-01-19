import { PostObject } from '@/types';
import React from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export type PostCardProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> &
	PostObject;

export default function PostCard(props: PostCardProps) {
	const { id, title, content, status, comments, ...rest } = props;

	return (
		<div className="post card" {...rest}>
			<div className="wrapper">
				<div
					data-testid="post-status"
					className={`status is-${status}`}>
					{status.toUpperCase()}
				</div>
				<h3 data-testid="post-title" className="title-md">
					{title}
				</h3>
				<p data-testid="post-content" className="content">
					{content}
				</p>
			</div>
			{status !== 'draft' && (
				<React.Fragment>
					<CommentList post={id} comments={comments} />
					<CommentCreate post={id} />
				</React.Fragment>
			)}
		</div>
	);
}
