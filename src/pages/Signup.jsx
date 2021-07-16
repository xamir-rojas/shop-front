import React, { Component } from 'react'
import '../components/styles/Signup.css';
import { Link } from 'react-router-dom';

export class Signup extends Component {
    render() {
        return (
            <>
                <div className="form__container">
                    <h1 className="h2 text-blue-600" > Sign up</h1>
                    <input type="text" className="input" placeholder="Username" />
                    <input type="password" className="input" placeholder="password" />
                    <Link to="/home" className="btn--primary" > Sign Up</Link>
                </div>
            </>
        )
    }
}

export default Signup;