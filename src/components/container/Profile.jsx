import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Profile = () => {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in.
        setUser(currentUser);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    return () => {
      // Unsubscribe from the auth listener on component unmount.
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          {/* You can display other user information here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
