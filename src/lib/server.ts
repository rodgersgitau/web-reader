// import service from '../lib/service';

// export async function uploadFile({ request }) {
// 	const body = request.body;
// 	const drive = service();
// 	const folderId = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;
// 	const file = drive.files.create({
// 		resource: { parents: [folderId] },
// 		media: { mimeType: 'application/pdf', body },
// 		fields: 'id'
// 	});
// 	const { id } = file.data;

// 	return { statusCode: 200, body: { id } };
// }

// export async function renameFile({ request }) {
// 	const data = await request.json();
// 	const drive = service();
// 	const { fileId, ...body } = data;
// 	const file = drive?.files?.update({ fileId, resource: body });
// 	return { statusCode: 204, body: { id: file.data.id } };
// }
