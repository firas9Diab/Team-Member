import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  function toggle1() {
    setToggle(!toggle);
  }

  useEffect(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  const navigate = useNavigate();

  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.team}>
          <img src="/public/images/UsersIcon.svg" />
          <h1>TeamFlow</h1>
        </div>
        <div className={styles.welcome}>
          <h1> Welcome Back</h1>
          <p> sign in to your account</p>
        </div>
        <div className={styles.form}>
          <label> Email address</label>
          <div className={styles.email}>
            <img src="/public/images/email.png" />
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
                <img src="/public/images/password.png" />
                <input
                  type={toggle ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className={styles.btn} onClick={() => toggle1()}>
                <img src="/public/images/EyeIcon.svg" />
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
