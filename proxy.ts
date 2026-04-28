import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export const proxy = createMiddleware(routing);
export default proxy;

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(it|en)/:path*', '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)']
};
