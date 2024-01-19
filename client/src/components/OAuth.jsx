import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { app } from '../firebase'
import { signInSuccess } from '../redux/user/userSlice';

export default function OAuth() {
  const dispatch = useDispatch();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
               method: 'POST',
               headers: {
                'content-Type': 'application/json',
               },
               body: JSON.stringify({
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
            })
        })
            const data = await res.json();
            console.log(data)
            dispatch(signInSuccess(data))
        } catch (error) {
            console.log('could not login with google', error);
        }
    }
  return (
    <button
    type="button"
    onClick={handleGoogleClick}
    className="bg-red-600 text-white rounded-lg p-3
    uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
}
