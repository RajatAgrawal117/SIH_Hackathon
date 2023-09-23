// withAuth.js
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Router from 'next/router';

export default function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const { data: session } = useSession();

    useEffect(() => {
      if (!session) {
        Router.push('/'); // Redirect to the login page if the user is not authenticated
      }
    }, [session]);

    if (!session) {
      // You can also display a loading spinner or message here while session is being checked.
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
}
