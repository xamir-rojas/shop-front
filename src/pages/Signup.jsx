import React, { useState } from "react";
import "../components/styles/Signup.css";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import { useHistory } from "react-router-dom";

export default Signup => {
  let history = useHistory();
  const poolData = {
    ClientId: "3unsnaq2372t4pi95h8kle1dhf",
    UserPoolId: "us-east-2_EwgRcRgUs",
  };
    // Password1!
  const userPool = new CognitoUserPool(poolData);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    userPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
    history.push("/home");
  };

  return (
    <>
      <form className="form__container" onSubmit={handleSubmit}>
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
