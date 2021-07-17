import React, { useState, useContext } from "react";
import "../components/styles/Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AccountContext } from "../Account";

const Login = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {authenticate} = useContext(AccountContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    authenticate(email,password).then(data => {
      console.log('Logged in !',data);
    }).catch(err=> {
      console.log('Failed to login!',err);
    })
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
