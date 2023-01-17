import { CommentObject } from '@/types';
import React from 'react';
import CommentCard from './CommentCard';

export type CommentListProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & { post: string; comments: Array<CommentObject> };

export default function CommentList(props: CommentListProps) {
	const { post, comments, ...rest } = props;

	return (
		<div className="comment list" {...rest}>
			<h2
				className="title-sm"
				style={{ marginBottom: 0, marginTop: 32 }}>
				Recent Comments
			</h2>
			<div className="container-flex-column">
				{comments.map(comment => (
					<CommentCard
						data-testid="comment-card"
						key={`${post}-${comment.id}`}
						{...comment}
					/>
				))}
			</div>
		</div>
	);
}
