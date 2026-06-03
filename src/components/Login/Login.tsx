import styles from "../Login/Login.module.scss";
import icon from "../../../Icons/EyeIcon.svg";
import peaple from "../../../public/peaple.svg";
import password from "../../../public/password.svg";
import email from "../../../public/email.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const navigation = useNavigate();
  const [visiblePassword, SetvisiblePassword] = useState<string>("password");
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: emailValue,
        password: passwordValue,
      });
      localStorage.setItem("token", response.data.accessToken);
      navigation("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        
        <img src={peaple} alt="" className={styles.peapleicon} />
        <p>TeamFlow</p>
      </div>
      <div>
        
        <h1>Welcome back</h1> <p>Sign in to your Account</p>
      </div>
      <div className={styles.email}>
        
        <label>Email Address</label>
        <div className={styles.emailfield}>
          
          <img src={email} alt="" />
          <input
            type="text"
            className={styles.emailtext}
            placeholder="you@example.com"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.password}>
        
        <label>Password</label>
        <div className={styles.passwordfield}>
          
          <div className={styles.passwordfieldtext}>
            
            <img src={password} alt="" className={styles.icons} />
            <input
              type={visiblePassword}
              className={styles.passwordtext}
              placeholder="Enter your password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              SetvisiblePassword(
                visiblePassword === "password" ? "text" : "password",
              );
            }}
            className={styles.eyes}
          >
            
            <img src={icon} alt="" />
          </button>
        </div>
      </div>
      {error && <p className={styles.errormessage}>{error}</p>}
      <button onClick={handleLogin} className={styles.signinbutton}>
        
        sign in
      </button>
      <div className={styles.signup}>
        
        <p>Don't have an account?</p>
        <button
          onClick={() => {
            navigation("/Signup");
          }}
          className={styles.go_to_signup}
        >
          
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
