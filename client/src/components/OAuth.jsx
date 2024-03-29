import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { app } from '../firebase'
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
            }),
        })
            const data = await res.json();
            dispatch(signInSuccess(data))
            navigate('/');
        } catch (error) {
            console.log('could not login with google', error);
        }
    }
  return (
   
    <button
      type="button"
      onClick={handleGoogleClick}
      className="border font-semibold rounded-lg p-3 uppercase hover:opacity-95 flex items-center justify-center space-x-2"
    >
      <FaGoogle size={30} color="red" />
      <span>Sign in with Google</span>
    </button>
    
  );
}
