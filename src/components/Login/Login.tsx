import styles from "../Login/Login.module.scss";
import icon from "../../../Icons/EyeIcon.svg";
import peaple from "../../../public/peaple.svg";
import password from "../../../public/password.svg";
import email from "../../../public/email.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const navigation = useNavigate();
  const [visiblePassword, SetvisiblePassword] = useState<string>("password");
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.accessToken);
        navigation("/");
      } else {
        setResult("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={peaple} alt="" className={styles.peapleicon} />

        <p>TeamFlow</p>
      </div>
      <div>
        <h1>Welcome back</h1>
        <p>Sign in to your Account</p>
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
      <button className={styles.signinbutton} onClick={handleLogin}>
        sign in
      </button>
      {result === "Invalid credentials" ? <p>{result}</p> : null}
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
}

export default Login;
