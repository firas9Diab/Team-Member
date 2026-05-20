import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import UsersIcon from "../../assets/UsersIcon.svg";
import email1 from "../../assets/email1.png";
import password1 from "../../assets/password1.png";
import EyeIcon from "../../assets/EyeIcon.svg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");

  function showpassword() {
    setShowPassword(showPassword === "password" ? "text" : "password");
  }

  const navigate = useNavigate();

  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.team}>
          <img src={UsersIcon} />
          <h1>TeamFlow</h1>
        </div>
        <div className={styles.welcome}>
          <h1> Welcome Back</h1>
          <p> sign in to your account</p>
        </div>
        <div className={styles.form}>
          <label> Email address</label>
          <div className={styles.email}>
            <img src={email1} />
            <input
              type="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <div className={styles.password}>
              <div className={styles.passContainer}>
                <img src={password1} />
                <input
                  type={showPassword}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className={styles.btn} onClick={() => showpassword()}>
                <img src={EyeIcon} />
              </button>
            </div>
          </div>
          <button type="submit" className={styles.button}>
            {" "}
            Sign In{" "}
          </button>
          <div className={styles.account}>
            <p>Don't have an account ?</p>
            <button onClick={() => navigate("/Sign")}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
