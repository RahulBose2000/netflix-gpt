import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);


    const toggleSingInForm = () =>{

        setIsSignInForm(!isSignInForm);

    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
          alt="logo"
        />
      </div>
      <form className=" bg-stone-950 bg-opacity-85  w-3/12 p-12 my-44 absolute mx-auto right-0 left-0  text-white rounded-lg">
        <h1 className="p-2 m-2 font-bold text-3xl py-4 ">{isSignInForm ? "Sing In" : "Sign Up"}</h1>
       
       { !isSignInForm && <input
          type="text"
          placeholder="User Name"
          className="p-4 my-4 w-full bg-transparent"
        />
       }
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-transparent"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-transparent"
        />
        <button className="p-4 my-6 w-full bg-red-700 text-white rounded-lg cursor-pointer">
        {isSignInForm ? "Sing In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSingInForm}>{isSignInForm ? "New to Netflix?  Sign Up Now" : "Already a User Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
