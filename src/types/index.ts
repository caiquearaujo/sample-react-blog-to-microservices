export interface PostObject {
	id: string;
	title: string;
	content: string;
	status: string;
	comments: CommentObject[];
}

export interface CommentObject {
	id: string;
	author: string;
	content: string;
	status: string;
}
