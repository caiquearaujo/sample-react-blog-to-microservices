import React from 'react';
import PostCreate from '@/app/components/PostCreate';
import PostList from './app/components/PostList';

const posts = [
	{
		id: 'b510713e1ee3d3eff67729ba6b4958728b681bb3',
		title: 'Tillbaka till Bromma',
		content:
			'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
		status: 'draft',
	},
	{
		id: 'fc433dde7b43ca3b96087b647359938dfec187f2',
		title: "Can't Stop the Music",
		content:
			'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
		status: 'published',
	},
	{
		id: '8921575d01003b429bd8eb5438c984d199d6a1fa',
		title: 'Star Wars: Episode VI - Return of the Jedi',
		content:
			'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
		status: 'published',
	},
	{
		id: '7fb0140c7d66fc2cc62b506c79c1c09083dd70c5',
		title: 'Beetlejuice',
		content:
			'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		status: 'published',
	},
	{
		id: 'ef71ba3191d0611c749c4a7be519225b61b7bf74',
		title: 'Portrait of a Lady, The',
		content:
			'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		status: 'draft',
	},
];

export default function App() {
	return (
		<main>
			<h1>Blog posts</h1>
			<PostCreate />
			<PostList posts={posts} />
		</main>
	);
}
