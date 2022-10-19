import type { GetServerSideProps, NextPage } from 'next';
import { getSession, signIn } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // next auth can get session in cookies req
  const session = await getSession({ req });

  // if it have cookies the user is logged in, so redirect to dashboard page
  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Home: NextPage = () => {
  function handleSignIn() {
    //next-auth function to sign-in with a provider
    signIn('google');
  }

  return (
    <>
      <div className="flex min-h-full h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="mt-8 space-y-6">
            <button
              onClick={handleSignIn}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
