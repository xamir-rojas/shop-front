import React, { useState, useContext } from "react";
import "../components/styles/Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AccountContext } from "../Account";

const Login = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setErrorShow] = useState(false);

  const [success, setSuccessShow] = useState(false);
  
  const { authenticate } = useContext(AccountContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessShow(false);
    setErrorShow(false);
    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
        history.push("/home");
        setSuccessShow(true);
      })
      .catch((err) => {
        console.error("Failed to login!", err);
        setErrorShow(true);
      });
  };

  return (
    <>
      <div className="login__container">
        <div className="w-full flex justify-center m-4 p-4">
          <h1 className="h1 text-gray-900">Log in </h1>
        </div>

        {error && (
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
            <h4 className="h4 text-white">Failed to Login</h4>
          </div>
        )}
        {success && (
          <div className="bg-green-400 text-center w-full p-2">
            <h4 className="h4 text-white">Logged in!</h4>
          </div>
        )}
        <form
          action=""
          className="flex flex-col w-2/3 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Username"
            className="input"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button type="submit" className="btn--primary">
            {" "}
            Log in
          </button>
        </form>
        <div className="login__footer">
          <Link to="/forgot" className="link">
            {" "}
            Forgot your password?{" "}
          </Link>
          <Link to="/signup" className="link">
            {" "}
            Create account{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Login;
