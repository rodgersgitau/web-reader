import { google } from 'googleapis';

import { decrypt } from './decrypt';
import { encrypted } from './service-account.enc';

const getDriveService = () => {
	const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
	const credentials = decrypt(encrypted);

	const auth = new google.auth.GoogleAuth({
		credentials,
		scopes: SCOPES
	});
	const driveService = google.drive({ version: 'v3', auth });
	return driveService;
};

export default getDriveService;
