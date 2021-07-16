import React from 'react';
import '../components/styles/Login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render(){
        return(
            <>
                <div className="login__container">
                    <div className="w-full flex justify-center m-4 p-4">
                        <h1 className="h1 text-gray-900">Log in </h1>
                    </div>
                    <form action="" className="flex flex-col w-2/3 ">
                        <input type="text" placeholder="Username" className="input" />
                        <input type="password" placeholder="Password" className="input" />
                        <Link to="/home" className="login__btn transform hover:scale-105"> Log in</Link>
                    </form>
                    <div className="login__footer">
                    <Link to="/forgot" className="link"> Forgot your password? </Link>
                    <Link to="/signup" className="link"> Create account </Link>
                    </div>
                </div>
                <footer className="footer">
                    <Link className="font-display text-gray-700 text-xl m-2 hover:text-blue-900" > © Shop</Link>
                </footer>
            </>
        );
    }
}
export default Login;