import type { GetSession, Handle } from '@sveltejs/kit';
import { parse } from 'cookie';
import { isTheme } from '../types';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = parse(event.request.headers.get('cookie'));
	if (cookies.theme && isTheme(cookies.theme)) {
		event.locals.theme = cookies.theme || null;
	}
	if (event.routeId === 'videos/[raid]_[folder]_[clip]')
		return await resolve(event, { ssr: false });
	return await resolve(event);
};

export const getSession: GetSession = ({ locals }) => {
	return { theme: locals.theme };
};
