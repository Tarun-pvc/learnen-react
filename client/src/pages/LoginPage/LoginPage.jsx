import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fdfedLogin.css";
import LoginImage from "./assets/Mobile-login-Cristina-removebg.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/wishListSlice";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleLoginSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/api/login", {
      email: email,
      password: password,
    })
    .then((result)=>{
      console.log(result);
      localStorage.setItem("loginUser",JSON.stringify(result.data));
      dispatch(addUser(result.data));
      if(result.data.Position==="student")
      {
        navigate('/studentDashboard');
      }
      else if(result.data.Position==="mentor"){
        navigate('/mentorDashboard');
      }
      else if(result.data.Position==="admin"){
        navigate('/adminDashboard');
      }
    })
    .catch((err)=>{
      console.error(err);
      navigate("/login");
    })
  };
  return (
    <div className="body1 center">
      <div className="innerBody center">
        <div className="innerBody_left">
          <img src={LoginImage} alt="Login_Image" className="img2" />
        </div>
        <div className="innerBody_right center1">
          <h1 className="WelcomeBack">Welcome Back :)</h1>
          <p className="WelcomeBack1" style={{ width: "100%" }}>
            To keep connected with us, please login with your personal
            information by email address and password
          </p>
          <form onSubmit={HandleLoginSubmit}>
            <div className="Login-field">
              <svg
                className="Login-input-icon"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path>
              </svg>
              <input
                autoComplete="off"
                id="logemail"
                placeholder="Email"
                className="Login-input-field"
                name="logemail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="Login-field">
              <svg
                className="Login-input-icon"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
              </svg>
              <input
                autoComplete="off"
                id="logpass"
                placeholder="Password"
                className="Login-input-field"
                name="logpass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="Login-btn" type="submit">
              Login
            </button>
            <a href="#" className="Login-btn-link WelcomeBack">
              Forgot password?
            </a>
          </form>
          <div>
            <div className="line"></div>
            <p className="or">or</p>
            <div className="line"></div>
          </div>
          <div>
            <button className="LoginbuttonGoogle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 262"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                ></path>
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
