import React from 'react';

import './PostCreate.scss';

export default function PostCreate() {
	const [alert, setAlert] = React.useState({
		type: 'message',
		message: '',
	});
	const [title, setTitle] = React.useState('');
	const [content, setContent] = React.useState('');
	const [status, setStatus] = React.useState('draft');

	const statuses = [
		{ key: 'draft', label: 'Draft' },
		{ key: 'published', label: 'Published' },
	];

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (title.length === 0) {
			setAlert({
				type: 'danger',
				message:
					'Title is required, you must to set it before submit.',
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

		setTitle('');
		setContent('');
		setStatus('draft');
		setAlert({
			type: 'message',
			message: 'Post created successfully.',
		});

		setTimeout(() => {
			setAlert({
				type: 'message',
				message: '',
			});
		}, 3000);
	};

	return (
		<div className="post creator" data-testid="post-create-comp">
			<h2 className="title">Create a new Post</h2>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						data-testid="title-input"
						value={title}
						onChange={e => setTitle(e.target.value)}
						type="text"
						className="form-control"
						id="title"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="title">Content</label>
					<textarea
						data-testid="content-input"
						value={content}
						onChange={e => setContent(e.target.value)}
						className="form-control"
						id="content"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="title">Status</label>
					<select
						data-testid="status-input"
						value={status}
						onChange={e => setStatus(e.target.value)}
						className="form-control"
						id="status">
						{statuses.map(_status => (
							<option key={_status.key} value={_status.key}>
								{_status.label}
							</option>
						))}
					</select>
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
