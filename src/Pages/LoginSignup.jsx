import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  return (
    <div className='loginsignup'>
      <div className="loginsignup-continer">
        <div className="loginsignup-toggle">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {isLogin ? (
          <div className="login">
            <h1>Login</h1>
            <div className='loginsignup-fields'>
              <form>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <p className="loginsignup-login">
                  Don't have an account? <span onClick={() => setIsLogin(false)}>Signup</span>
                </p>
                <div className="loginsignup-agree">
                  <input type="checkbox" name="" id="" />
                  <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="signup">
            <h1>Signup</h1>
            <div className='loginsignup-fields'>
              <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button>Signup</button>
                <p className="loginsignup-login">
                  Already have an account? <span onClick={() => setIsLogin(true)}>Login</span>
                </p>
                <div className="loginsignup-agree">
                  <input type="checkbox" name="" id="" />
                  <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;