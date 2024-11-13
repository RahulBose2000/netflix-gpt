import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';


const Header = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () =>{
    const auth = getAuth();
   signOut(auth).then(() => {
  // Sign-out successful.
  

}).catch((error) => {
  // An error happened.
  navigate('/error');
});

  }

  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate('/browse')
         
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/');
        
         
        }
      });
      //unscubscribe when components unmount
      return () => unsubscribe();
},[])
console.log(user)
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src={ LOGO }
        alt='logo'
      />

       
      {user && <div className='flex p-2'>
        <img className='w-12 h-12' src={user?.photoURL || USER_AVATAR}  alt='USER_AVATAR'/>
        <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
      </div>
}
    </div>
     
  );

}

export default Header;
