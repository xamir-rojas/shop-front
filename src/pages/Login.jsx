import React, { useState } from "react";
import "../components/styles/Login.css";
import { Link } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess:", data);
      },
      onFailure: (data) => {
        console.log("onFailure:", data);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired:", data);
      },
    });
    history.push("/home");
  };

  return (
    <>
      <div className="login__container">
        <div className="w-full flex justify-center m-4 p-4">
          <h1 className="h1 text-gray-900">Log in </h1>
        </div>
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
