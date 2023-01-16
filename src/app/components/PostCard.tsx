import { PostObject } from '@/types';
import React from 'react';
import CommentCard from './CommentCard';
import CommentCreate from './CommentCreate';

export type PostCardProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> &
	PostObject;

export default function PostCard(props: PostCardProps) {
	const { id, title, content, status, ...rest } = props;

	return (
		<div className="post card" {...rest}>
			<div className="wrapper">
				<div data-testid="status" className={`status is-${status}`}>
					{status.toUpperCase()}
				</div>
				<h3 data-testid="title" className="title-md">
					{title}
				</h3>
				<p data-testid="content" className="content">
					{content}
				</p>
			</div>
			{status !== 'draft' && <CommentCreate postId={props.id} />}
		</div>
	);
}
