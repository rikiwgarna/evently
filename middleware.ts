import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Even though user is not login, user still visiting the page
  publicRoutes: [
    '/', // User still can access home page even though user is not login
    '/events/:id', // User still can access home page even though user is not login
    '/api/webhook/clerk',
    '/api/webhook/stripe', //We need this once we implement payment
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 