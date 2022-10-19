
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

* `DATABASE_URL`= planetscale main db url
* `SHADOW_DATABASE_URL`= planetscale shadow db url
* `GOOGLE_CLIENT_ID`= secret id google oauth
* `GOOGLE_CLIENT_SECRET`= secret key google oauth
* `NEXTAUTH_URL`= project url (in this case: http://localhost:3000)
* `NEXTAUTH_SECRETE` = anything, just bang your head on the keyboard

# Example explication:
## Prisma Schema
Prisma schema must has: https://next-auth.js.org/adapters/prisma#setup

## Client
Create prisma client in [src/lib/prismaClient.ts](https://github.com/ViniBGoulart/next-auth-prisma-adapter/blob/main/src/lib/prismaClient.ts)

## Api route
Create next-auth api route in [/src/pages/api/auth/[...nextauth].ts](https://github.com/ViniBGoulart/next-auth-prisma-adapter/blob/main/src/pages/api/auth/%5B...nextauth%5D.ts)

The key point is in the adapter: PrismaAdapter(prisma), which makes next-auth users go to our database

## Session provider
Use next [session provider](https://github.com/ViniBGoulart/next-auth-prisma-adapter/blob/main/src/pages/_app.tsx) to encompass the application, passing as a parameter the session which comes in the pageProps

## Pages

Create two pages, one for login and another that will only be accessed by authenticated users
#### Login
In [Login](https://github.com/ViniBGoulart/next-auth-prisma-adapter/blob/main/src/pages/index.tsx) we using **signIn** next-auth function passing to params the google provider. we are also using next's ssr to check if the user who is trying to access the page already has a session, if true, redirect to the dashboard page.
#### Dashboard
In [Dashboard](https://github.com/ViniBGoulart/next-auth-prisma-adapter/blob/main/src/pages/dashboard.tsx) we using **useSession** next-auth function to get user data and session status. We also create a button to signOut.

## Middleware
Create a [Middleware](https://github.com/ViniBGoulart/next-auth-prisma-adapter/blob/main/src/middleware.ts) to block access to pages by users who do not have a session.
