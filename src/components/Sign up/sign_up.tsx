import styles from "../Sign up/sign_up.module.scss";
import icon from "../../../Icons/EyeIcon.svg";
import peaple from "../../../public/peaple.svg";
import password from "../../../public/password.svg";
import email from "../../../public/email.svg";
import user from "../../../public/user.svg";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function sign_up() {
  const [Password, SetPassword] = useState("");
  const [Confirm_Password, Set_ConfirmPassword] = useState("");
  const [VisiblePassword, SetVisiblePassword] = useState("password");
  const [VisiblePasswordConfirm, SetVisiblePasswordConfirm] = useState("password");


const[errormessage,seterrormessage]=useState("");

  //  if(Password===Confirm_Password&&Password!==""&&Confirm_Password!=="")
  // {PasswordMatch(true)}else
  // {
  //     PasswordMatch(false)
  // }

const n= useNavigate() 
  

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
            required
          />
        </div>
      </div>
      <div className={styles.password}>
        <label>Password</label>
        <div className={styles.passwordfield}>
          <div className={styles.passwordfieldtext}>
            <img src={password} alt="" className={styles.icons} />
            <input
              type={VisiblePassword}
              className={styles.passwordtext}
              placeholder="Create a password"
              value={Password}
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            onClick={() => {
              VisiblePassword === "password"
                ? SetVisiblePassword("text")
                : SetVisiblePassword("password");
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
            <img src={password} alt="" className={styles.icons} />
            <input
              type={VisiblePasswordConfirm}
              className={styles.passwordtext}
              placeholder="Confirm your password"
              value={Confirm_Password}
              onChange={(e) => {
                Set_ConfirmPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            onClick={() => {
              VisiblePasswordConfirm === "password"
                ? SetVisiblePasswordConfirm("text")
                : SetVisiblePasswordConfirm("password");
            }}
            className={styles.eyes}
          >
            <img src={icon} alt="" />
          </button>
        </div>
      </div>
      
        <p className={errormessage === "Password is Match" ? styles.match : styles.notmatch}>
        {errormessage}
    
      </p>

      <button
        onClick={() => {
          Password === Confirm_Password &&
          Password !== "" &&
          Confirm_Password !== ""
            ? (seterrormessage("Password is Match"))
            : (seterrormessage("Password is not Match"))
        }
      }
        className={styles.signinbutton}
      >
       Create Account
      </button>
     <div className={styles.signin}>
            <p>Don't have an account?</p>   <button onClick={()=>{
 n("/Login");
        }} className={styles.go_to_signin}>
          Log in
        </button>
            
          </div>
    </div>
  );
}

export default sign_up