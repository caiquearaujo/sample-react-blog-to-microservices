import React from 'react';
import { createComment } from '@/app/api/index';

export type CommentCreateProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & { post: string };

export default function CommentCreate(props: CommentCreateProps) {
	const { post } = props;

	const [alert, setAlert] = React.useState({
		type: 'message',
		message: '',
	});
	const [content, setContent] = React.useState('');
	const [author, setAuthor] = React.useState('');

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (author.length === 0) {
			setAlert({
				type: 'danger',
				message:
					'Your name is required, you must to set it before submit.',
			});
			return;
		}

		if (content.length === 0) {
			setAlert({
				type: 'danger',
				message:
					'Content is required, you must to set it before submit.',
			});
			return;
		}

		const created = await createComment(post, {
			author,
			content,
		});

		if (!created) {
			setAlert({
				type: 'danger',
				message: 'Error creating comment, please try again.',
			});
		} else {
			setAlert({
				type: 'message',
				message: 'Comment created successfully.',
			});
		}

		setAuthor('');
		setContent('');

		setTimeout(() => {
			setAlert({
				type: 'message',
				message: '',
			});
		}, 3000);
	};

	return (
		<div className="comment creator" data-testid="comment-create-comp">
			<h2 className="title-sm">Comment on Post</h2>
			<form onSubmit={onSubmit}>
				<div className="form-group-sm">
					<label htmlFor="author">Your Name</label>
					<input
						data-testid="author-input"
						value={author}
						onChange={e => setAuthor(e.target.value)}
						type="text"
						className="form-control"
						id="author"
					/>
				</div>
				<div className="form-group-sm">
					<label htmlFor="content">Message</label>
					<textarea
						data-testid="content-input"
						value={content}
						onChange={e => setContent(e.target.value)}
						className="form-control"
						id="content"
					/>
				</div>
				{alert.message && (
					<div
						data-testid="alert-message"
						className={`alert ${alert.type}`}>
						{alert.message}
					</div>
				)}
				<button
					data-testid="submit-button"
					type="submit"
					className="primary small">
					Submit
				</button>
			</form>
		</div>
	);
}
