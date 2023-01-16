import React from 'react';

import './PostCard.scss';

export type PostCardProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	title: string;
	content: string;
	status: string;
};

export default function PostCard(props: PostCardProps) {
	const { title, content, status, ...rest } = props;

	return (
		<div className="post card" {...rest}>
			<div data-testid="status" className={`status is-${status}`}>
				{status.toUpperCase()}
			</div>
			<h3 data-testid="title" className="title">
				{title}
			</h3>
			<p data-testid="content" className="content">
				{content}
			</p>
		</div>
	);
}
