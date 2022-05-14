import fs from 'fs/promises';
import path from 'path';
import type { Vods } from 'src/types';

export const get = async ({ params }) => {
	const raid = params.raid as 'en' | 'tov';
	return {
		body: {
			vods: await getFileStruct(raid),
			raid: raid
		}
	};
};

const getFileStruct = async (raid: 'en' | 'tov'): Promise<Vods> => {
	const raidPath = `static/videos/${raid}`;
	const files = await fs.readdir(raidPath);

	return files.map(file => {
		return {
			pathname: `${raid}/${file}`.replace('.mp4', ''),
			name: file.replace('.mp4', '')
		};
	});
};
