import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create the first route matcher for protected routes
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

// Create another route matcher for additional routes
const isAnotherProtectedRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware((auth, req) => {
  // Check if the request matches any of the protected routes
  if (isProtectedRoute(req) || isAnotherProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
