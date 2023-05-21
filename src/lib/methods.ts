import service from './service';

export const listFiles = async () => {
	try {
		const drive = service();
		const folderId = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;
		const response = await drive.files.list({ q: `${folderId} in parents` });
		return response;
	} catch (error) {
		// console.log(error);
		return;
	}
};

export async function uploadFile({ request }: { request: Request }) {
	try {
		const body = request.body;
		const drive = service();
		const folderId = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;
		const file = await drive.files.create({
			requestBody: { parents: [folderId] },
			media: { body },
			fields: 'id'
		});
		const { id } = file.data;

		return { statusCode: 200, body: { id } };
	} catch (error) {
		// console.log(error);
	}
}

// export async function renameFile({ request }: {request:Request}) {
// 	const data = await request.json();
// 	const { fileId, ...body } = data;
// 	const drive = service();
// 	const file = await drive.files.update({ fileId, resource: body });
// 	return { statusCode: 204, body: { id: file.data.id } };
// }
