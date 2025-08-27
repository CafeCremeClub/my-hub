import {NextRequest, NextResponse} from 'next/server';

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;

    const token = request.cookies.get('token')?.value;
    const shouldCompleteOnboarding = request.cookies.get('should-complete-onboarding')?.value;

    const hasToken = !!token


    const publicRoutes = ['/auth/signin', '/auth/signup'];
    const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));

    const authRoutes = ['/auth'];
    const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));


    const onboardingRoutes = ['/auth/onboarding'];
    const isOnboardingRoute = onboardingRoutes.some(route => pathname.startsWith(route));


    if (pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (!hasToken) {

        if (!isPublicRoute) {
            return NextResponse.redirect(new URL('/auth/signin', request.url));
        }

        return NextResponse.next();
    }

    if (hasToken) {
        // Check if user needs to complete onboarding
        if (shouldCompleteOnboarding === "true") {
            if (!isOnboardingRoute) {
                const onboardingPath = '/auth/onboarding'
                return NextResponse.redirect(new URL(onboardingPath, request.url));
            }
            return NextResponse.next();
        }

        // If user tries to access onboarding routes but doesn't need to complete onboarding
        if (isOnboardingRoute && shouldCompleteOnboarding !== "true") {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }

        if (isAuthRoute && !isOnboardingRoute) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }

        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}