import React, { useState } from "react";
import "../components/styles/Signup.css";
import { useHistory } from "react-router-dom";
import UserPool from "../UserPool";

 const Signup =() => {
  let history = useHistory();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err){
        console.error(err);
        setError(err);
      }
      else{
        console.log(data);
        history.push("/login");
      }
      
    });
  };

  return (
    <>
      <form className="form__container" onSubmit={handleSubmit}>
      {error?(
          <div className="bg-red-400 text-center w-full p-2">
            <h4 className="h4 text-white">{error.message}</h4>
          </div>
        ):<></>
      }
        <h1 className="h2 text-blue-600"> Sign up</h1>
        <input
          type="text"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="btn--primary">
          Sign Up
        </button>
      </form>
    </>
  );
};
export default Signup;