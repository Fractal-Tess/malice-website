import fs from 'fs/promises';
import path from 'path';
import type { VideosFileStructure } from 'src/types';

export const get = async ({ params }) => {
	const raid = params.raid;
	return {
		body: {
			vfsArray: await getFileStruct(raid)
		}
	};
};

async function getStructure(filePath: string) {
	const dirs = await fs.readdir(filePath, { withFileTypes: true });

	const structure: Record<string, any> = {};
	for (let i = 0; i < dirs.length; i++) {
		const dir = dirs[i];
		if (!dir.isDirectory()) continue;
		structure[dir.name] = await getFolderContents(
			path.join(filePath, dir.name)
		);
	}
	return structure;
}

async function getFolderContents(filePath: string) {
	const files = await fs.readdir(filePath, { withFileTypes: true });
	const content: Record<string, any> = {};
	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		if (file.isDirectory()) continue;
		content[i + 1] = file.name;
	}
	return content;
}

const getFileStruct = async (raid: 'en' | 'tov') => {
	const dirs = await fs.readdir(`public/videos/${raid}`, {
		withFileTypes: true
	});
	const vfsArray: VideosFileStructure[] = [];

	for (const dir of dirs) {
		const files = await fs.readdir(`public/videos/${raid}/${dir.name}`, {
			withFileTypes: true
		});

		vfsArray.push({
			folderName: dir.name,
			uncutFile: files.find(f => f.name === 'uncut.mp4')?.name || null,
			cutFiles: files.filter(f => f.name !== 'uncut.mp4').map(f => f.name)
		});
	}
	return vfsArray;
};
