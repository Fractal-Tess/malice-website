import type { RequestHandler } from '@sveltejs/kit';
import { isTheme } from '../types';
import cookie from 'cookie';

export const put: RequestHandler = async ({ request }) => {
	const theme = await request.text();

	const cookieExpireDate = new Date();
	cookieExpireDate.setDate(cookieExpireDate.getDate() + 21);

	if (!isTheme(theme)) {
		return {
			status: 400,
			body: `not a valid theme value: ${theme}`
		};
	}

	return {
		headers: {
			// 'Set-Cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Path=/`
			'Set-Cookie': cookie.serialize('theme', theme, {
				path: '/',
				httpOnly: true,
				secure: true,
				sameSite: true,
				expires: cookieExpireDate,
				maxAge: cookieExpireDate.getTime()
			})
		}
	};
};
