import { PostObject } from '@/types';
import React from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export type PostCardProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> &
	PostObject;

const sampleComments = [
	{
		id: '1',
		postId: '1',
		author: 'John Doe',
		content: 'This is a comment',
		status: 'approved',
	},
	{
		id: '2',
		postId: '1',
		author: 'Jane Doe',
		content: 'This is another comment',
		status: 'pending',
	},
	{
		id: '3',
		postId: '1',
		author: 'Justin Doe',
		content: 'This is some comment',
		status: 'refused',
	},
];

export default function PostCard(props: PostCardProps) {
	const { id, title, content, status, ...rest } = props;

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
				<CommentList comments={sampleComments} />
			</div>
			{status !== 'draft' && <CommentCreate postId={props.id} />}
		</div>
	);
}
