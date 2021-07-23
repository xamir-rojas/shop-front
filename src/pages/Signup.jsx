import React, { useState } from "react";
import "../components/styles/Signup.css";
import { useHistory } from "react-router-dom";
import UserPool from "../UserPool";

const Signup = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
        setError(err);
      } else {
        console.log(data);
        history.push("/login");
      }
    });
  };

  return (
    <>
      <form className="form__container" onSubmit={handleSubmit}>
        {error ? (
          <div className="error__container">
            <h4 className="h4 text-white mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </h4>
            <h4 className="h4 text-white">{error.message}</h4>
          </div>
        ) : (
          <></>
        )}
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
