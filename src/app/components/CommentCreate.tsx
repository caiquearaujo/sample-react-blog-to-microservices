import React from 'react';

import './CommentCreate.scss';

export type CommentCreateProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & { postId: string };

export default function CommentCreate(props: CommentCreateProps) {
	const { postId } = props;

	const [alert, setAlert] = React.useState({
		type: 'message',
		message: '',
	});
	const [content, setContent] = React.useState('');
	const [author, setAuthor] = React.useState('');

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

		setAuthor('');
		setContent('');
		setAlert({
			type: 'message',
			message: 'Comment created successfully.',
		});

		setTimeout(() => {
			setAlert({
				type: 'message',
				message: '',
			});
		}, 3000);
	};

	return (
		<div className="comment creator" data-testid="comment-create-comp">
			<h2 className="title">Comment on Post</h2>
			<form onSubmit={onSubmit}>
				<div className="form-group">
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
				<div className="form-group">
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
						className={`alert-${alert.type}`}>
						{alert.message}
					</div>
				)}
				<button
					data-testid="submit-button"
					type="submit"
					className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
