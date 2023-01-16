import { CommentObject } from '@/types';
import React from 'react';

export type CommentCardProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> &
	CommentObject;

export default function CommentCard(props: CommentCardProps) {
	const { author, content, status, ...rest } = props;

	let censuredContent;

	switch (status) {
		case 'approved':
			censuredContent = content;
			break;
		case 'pending':
			censuredContent = 'This comment is awaiting moderation';
			break;
		case 'refused':
			censuredContent = 'This comment has been refused';
			break;
		default:
			censuredContent = 'This comment is awaiting moderation';
			break;
	}

	return (
		<div className="comment card" {...rest}>
			<div className="wrapper">
				<div
					data-testid="comment-status"
					className={`status is-${status}`}>
					{status.toUpperCase()}
				</div>
				<p data-testid="comment-content" className="content">
					{censuredContent}
				</p>
				<p data-testid="comment-author" className="author">
					Commented by {author}
				</p>
			</div>
		</div>
	);
}
