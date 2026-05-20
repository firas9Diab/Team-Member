import React, { useEffect, useState } from "react";
import styles from "./Sign.module.scss";
import { NULL } from "sass";
import { useNavigate } from "react-router-dom";
const Sign = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [showConfirm, setShowConfirm] = useState("password");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showMassage, setShowMassage] = useState("");

  const navigate = useNavigate();
  function massage() {
    if (password === confirm) {
      setShowMassage("");
      alert("signedIn");
    } else {
      setShowMassage("password not true");
    }
  }

  function showpassword() {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  }

  function showconfrim() {
    if (showConfirm === "password") {
      setShowConfirm("text");
    } else {
      setShowConfirm("password");
    }
  }

  return (
    <div className={styles.sign}>
      <div className={styles.card}>
        <div className={styles.team}>
          <img src="/public/images/UsersIcon.svg" />
          <h1>TeamFlow</h1>
        </div>

        <div className={styles.create}>
          <h1>Create Account</h1>
          <p>Sign up to get started</p>
        </div>

        <form className={styles.form}>
          <label>Full name </label>
          <div className={styles.email}>
            <img src="/public/images/user.png" alt="user" />
            <input type="text" placeholder="Enter your full name" />
          </div>
          <label> Email address</label>
          <div className={styles.email}>
            <img src="/public/images/email.png" alt="email" />
            <input type="text" placeholder="you@example.com" required />
          </div>
          <div>
            <label>Password</label>
            <div className={styles.password}>
              <div className={styles.passContainer}>
                <img src="/public/images/password.png" />
                <input
                  type={showPassword}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="button"
                className={styles.btn}
                onClick={() => showpassword()}
              >
                <img src="/public/images/EyeIcon.svg" />
              </button>
            </div>
          </div>

          <div>
            <label>Confirm password</label>
            <div className={styles.password}>
              <div className={styles.passContainer}>
                <img src="/public/images/password.png" />
                <input
                  type={showConfirm}
                  placeholder="Confirm your password"
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                />
              </div>
              <button
                type="button"
                className={styles.btn}
                onClick={() => showconfrim()}
              >
                <img src="/public/images/EyeIcon.svg" />
              </button>
            </div>
            <p className={styles.falseValue}>{showMassage}</p>
          </div>

          <button
            type="submit"
            className={styles.button}
            onClick={() => {
              massage();
            }}
          >
            Create Account
          </button>
          <div className={styles.account}>
            <p>Already have an account ?</p>
            <button onClick={() => navigate("/login")}>Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
