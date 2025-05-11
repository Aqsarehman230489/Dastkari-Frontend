import React, { useState } from 'react';
import '../assets/css/Login.css';


const LoginSignUp = ({onBackClick}) => {
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.loginEmail.value;
        const password = event.target.loginPassword.value;
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.signupName.value;
        const email = event.target.signupEmail.value;
        const password = event.target.signupPassword.value;
        const confirmPassword = event.target.signupConfirmPassword.value;
        alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
    };

    return (
        <section className="form-section">
            {isLogin ? (
                <div className="form-box login-form">
                    <div className="form-value">
                        <form id="login-form" onSubmit={handleLogin}>
                            <h2>Login</h2>
                            <div className="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input id="loginEmail" name="loginEmail" type="email" required />
                                <label htmlFor="loginEmail">Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input id="loginPassword" name="loginPassword" type="password" required />
                                <label htmlFor="loginPassword">Password</label>
                            </div>
                            <div className="forget">
                                <label><input type="checkbox" /> Remember Me</label>
                                <a href="#">Forgot Password</a>
                            </div>
                            <button type="submit" className="button">Log In</button>
                            <button style={{marginTop: "6px"}}  className="button"  onClick={onBackClick} >  Back to Home</button>
                           
                            <div className="register">
                                <p>Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Sign Up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="form-box signup-form">
                    <div className="form-value">
                        <form id="signup-form" onSubmit={handleSignUp}>
                            <h2>Sign Up</h2>
                            <div className="inputbox">
                                <ion-icon name="person-outline"></ion-icon>
                                <input id="signupName" name="signupName" type="text" required />
                                <label htmlFor="signupName">Username</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input id="signupEmail" name="signupEmail" type="email" required />
                                <label htmlFor="signupEmail">Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input id="signupPassword" name="signupPassword" type="password" required />
                                <label htmlFor="signupPassword">Password</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input id="signupConfirmPassword" name="signupConfirmPassword" type="password" required />
                                <label htmlFor="signupConfirmPassword">Confirm Password</label>
                            </div>
                            <button type="submit" className="button">Sign Up</button>
                            <button style={{marginTop: "4px"}}  className="button"  onClick={onBackClick} >  Back to Home</button>
                            <div className="register">
                                <p>Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Log In</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default LoginSignUp;
