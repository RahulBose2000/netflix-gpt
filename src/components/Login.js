import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null); // Added ref for username
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
 
  const dispatch = useDispatch();
  const handleButtonClick = (e) => {
    e.preventDefault();

    // Validate the form data
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (msg) return;

    // Sign in / sign up
    if (!isSignInForm) {
      // Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // Update user profile with username after sign-up
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              USER_AVATAR, // Assuming 'username' is used for the display name
          })
        
            .then(() => {
              const updatedUser = auth.currentUser; // Get the updated user from Firebase
             
              
              const { uid, email, displayName, photoURL } = updatedUser; // Use the latest values from auth.currentUser
                            dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL||USER_AVATAR,
                })
              );
              
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(`${errorCode} ${errorMessage}`);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode} ${errorMessage}`);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // navigate("/browse");
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(`${errorCode} ${errorMessage}`);
        });
    }
  };

  

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMsg(null); // Clear error message when toggling
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}  alt="BG_URL"
        />
      </div>
      <form className="bg-stone-950 bg-opacity-85 w-3/12 p-12 my-44 absolute mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="p-2 m-2 font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="User Name"
            className="p-4 my-4 w-full bg-transparent"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-transparent"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-transparent"
        />
        {errorMsg && <p className="text-red-500 text-l">{errorMsg}</p>}{" "}
        {/* Conditional error message */}
        <button
          className="p-4 my-6 w-full bg-red-700 text-white rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
