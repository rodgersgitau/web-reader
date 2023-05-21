import { listFiles } from '$lib/methods';

import { fail } from '@sveltejs/kit';

interface Book {
	id: string;
	title: string;
	cover?: string;
	content?: string;
}

const defaultBooks = [
	{ id: 'sfsfsfs', title: 'Knex cheatsheet' },
	{ id: 'ssfwfwf', title: 'Infinite_Runner_Phaser3_TypeScript' }
];

export async function load() {
	const allFiles = await listFiles();
	console.log({ allFiles });
	const books: Book[] = defaultBooks;
	return { books };
}

export const actions = {
	uploadFile: async ({ request }: { request: Request }) => {
		const formData = await request.formData();
		const book = formData.get('fileUpload') as File;

		if (!book) {
			return fail(400, { book, missing: true });
		}

		defaultBooks.push({
			id: `ssfsf${Math.random()}`,
			title: `${book.toString().split('.')[0]}`
		});

		return { success: true };
	},
	renameFile: async ({ request }) => {
		const formData = await request.formData();
		const book = String(formData.get('fileUpload'));

		return { success: true, book };
	}
};
