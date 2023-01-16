import { CommentObject } from '@/types';
import React from 'react';

export type CommentCardProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> &
	CommentObject;

export default function CommentCard(props: CommentCardProps) {
	const { author, content, status, ...rest } = props;

	return (
		<div className="comment card" {...rest}>
			<div className="wrapper">
				<div data-testid="status" className={`status is-${status}`}>
					{status.toUpperCase()}
				</div>
				<p data-testid="content" className="content">
					{content}
				</p>
				<p data-testid="author" className="author">
					Commented by {author}
				</p>
			</div>
		</div>
	);
}
