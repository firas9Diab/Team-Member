import styles from "../Sign up/sign_up.module.scss";
import icon from "../../../Icons/EyeIcon.svg";
import peaple from "../../../public/peaple.svg";
import passwordlock from "../../../public/password.svg";
import email from "../../../public/email.svg";
import user from "../../../public/user.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setconfirmPassword] = useState<string>("");
  const [visiblePassword, setvisiblePassword] = useState<string>("password");
  const [visiblepasswordConfirm, setvisiblepasswordConfirm] =
    useState<string>("password");
  const [errormessage, seterrormessage] = useState<string>("");
  const navigation = useNavigate();
  const [fullName, setFullName] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      seterrormessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email: emailValue,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        seterrormessage("Account created successfully");
        localStorage.setItem("token", data.accessToken);
        navigation("/Login");
      } else {
        seterrormessage(data.message || "Signup failed");
      }
    } catch (error) {
      seterrormessage("Server error");
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
        <label>Full name</label>
        <div className={styles.emailfield}>
          <img src={user} alt="" />
          <input
            type="text"
            className={styles.emailtext}
            placeholder="Enter your Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.email}>
        <label>Email address</label>
        <div className={styles.emailfield}>
          <img src={email} alt="" />
          <input
            type="email"
            className={styles.emailtext}
            placeholder="you@example.com"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            required
          />
        </div>
      </div>
      <div className={styles.password}>
        <label>Password</label>
        <div className={styles.passwordfield}>
          <div className={styles.passwordfieldtext}>
            <img src={passwordlock} alt="" className={styles.icons} />
            <input
              type={visiblePassword}
              className={styles.passwordtext}
              placeholder="Create a password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            onClick={() => {
              setvisiblePassword(
                visiblePassword === "password" ? "text" : "password",
              );
            }}
            className={styles.eyes}
          >
            <img src={icon} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.password}>
        <label>Confirm Password</label>
        <div className={styles.passwordfield}>
          <div className={styles.passwordfieldtext}>
            <img src={passwordlock} alt="" className={styles.icons} />
            <input
              type={visiblepasswordConfirm}
              className={styles.passwordtext}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            onClick={() => {
              setvisiblepasswordConfirm(
                visiblepasswordConfirm === "password" ? "text" : "password",
              );
            }}
            className={styles.eyes}
          >
            <img src={icon} alt="" />
          </button>
        </div>
      </div>

      <p
        className={
          errormessage === "Password is Match" ? styles.match : styles.notmatch
        }
      >
        {errormessage}
      </p>

      <button
        onClick={() => {
          seterrormessage(
            password === confirmPassword &&
              password !== "" &&
              confirmPassword !== ""
              ? ""
              : "Password is not Match",
          );
          handleSignup();
        }}
        className={styles.signinbutton}
      >
        Create Account
      </button>
      <div className={styles.signin}>
        <p>Don't have an account?</p>{" "}
        <button
          onClick={() => {
            navigation("/Login");
          }}
          className={styles.go_to_signin}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default SignUp;