export interface PostObject {
	id: string;
	title: string;
	content: string;
	status: string;
}

export interface CommentObject {
	id: string;
	postId: string;
	author: string;
	content: string;
	status: string;
}
