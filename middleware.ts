import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    publicRoutes: ["/", "/api/webhook"],
    afterAuth(auth, req) {
        if (auth.userId && auth.isPublicRoute) {
            let path = "/select-area";

            if (auth.orgId) {
                path = `/organization/${auth.orgId}`;
            }

            const orgSelection = new URL(path, req.url);
            return NextResponse.redirect(orgSelection);
        }

        if (!auth.userId && !auth.isPublicRoute) {
            return redirectToSignIn({ returnBackUrl: req.url });
        }

        if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-area") {
            const orgSelection = new URL("/select-area", req.url);
            return NextResponse.redirect(orgSelection);
        }
    }
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

/*
import {authMiddleware, redirectToSignIn} from "@clerk/nextjs";
import {NextResponse} from "next/server";


function getUserIdFromUrl(url) {
    const urlParts = url.split('/');
    // Assuming the URL pattern is "/user/[userId]", where [userId] is the dynamic part
    const userIndex = urlParts.findIndex(part => part === 'user');
    if (userIndex !== -1 && urlParts.length > userIndex + 1) {
        return urlParts[userIndex + 1];
    }
    return null;
}

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    publicRoutes: ["/"],
    afterAuth(auth, req) {
        if (auth.userId && auth.isPublicRoute) {
            const path = `/user/${auth.userId}`;
            const orgSelection = new URL(path, req.url);
            return NextResponse.redirect(orgSelection);
        }
        if (!auth.userId && !auth.isPublicRoute) {

            return redirectToSignIn(req.url);
        }
        if (auth.userId && !auth.isPublicRoute) {
            const userIdFromUrl = getUserIdFromUrl(req.url); // Implement this function
            if (auth.userId && userIdFromUrl && auth.userId !== userIdFromUrl) {
                console.log('Unauthorized');
                const path = `/user/${auth.userId}`;
                const orgSelection = new URL(path, req.url);
                return NextResponse.redirect(orgSelection);
            } else if (auth.userId && userIdFromUrl && auth.userId === userIdFromUrl) {
                console.log('Authorized');
                return NextResponse.next();
            }
            return NextResponse.next();

        }

    }
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
*/