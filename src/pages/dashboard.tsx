import { signOut, useSession } from 'next-auth/react';

// The user only be able to access this page if is logged in
export default function Dashboard() {
  const { data: session, status } = useSession();
  return (
    <div>
      <h1>User authenticated</h1>
      <p>{JSON.stringify(session)}</p>
      <p>{JSON.stringify(status)}</p>
      <button onClick={() => signOut({ redirect: true, callbackUrl: '/' })}>
        Sign out
      </button>
    </div>
  );
}
