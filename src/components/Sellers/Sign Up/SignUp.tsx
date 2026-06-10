import styles from "../Sign Up/SignUp.module.scss";
import googlelogo from "../../../../public/Icons/google-logo.png";
import useSignUp from "./useSignUp";
import eyeIcon from "../../../../public/Icons/EyeIcon.svg";
import "../../../font.css";

const SignUp = () => {
  const {
    password,
    handlePasswordChange,
    confirmPassword,
    handleConfirmPasswordChange,
    visiblePassword,
    handleVisiblePasswordChange,
    visiblePasswordConfirm,
    handleVisiblePasswordConfirmChange,
    errorMessage,
    fullName,
    handleFullNameChange,
    emailValue,
    handleEmailChange,
    phoneValue,
    handlePhoneChange,
    handleSignup,
    navigation,
  } = useSignUp();
  return (
    <div className={styles.signupbody}>
      <div className={styles.signupcontainer}>
        <div className={styles.signupcard}>
          <div className={styles.signupdesc}>
            <div className={styles.signuptext}>
              <h1>Become a Seller</h1>
              <p>Shop Smarter, Shop Easier: Your One-Stop </p>
            </div>

            <div className={styles.signupfield}>
              <div className={styles.email}>
                <div className={styles.emailfield}>
                  <div></div>
                  <input
                    value={fullName}
                    onChange={(e) => handleFullNameChange(e)}
                    type="text"
                    className={styles.emailtext}
                    placeholder="Full name"
                    required
                  />
                </div>
              </div>

              <div className={styles.email}>
                <div className={styles.emailfield}>
                  <img alt="" />
                  <input
                    value={emailValue}
                    onChange={(e) => handleEmailChange(e)}
                    type="email"
                    className={styles.emailtext}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className={styles.password}>
                <div className={styles.passwordfield}>
                  <div className={styles.passwordfieldtext}>
                    <img alt="" className={styles.icons} />
                    <input
                      value={password}
                      onChange={(e) => handlePasswordChange(e)}
                      type={visiblePassword ? "text" : "password"}
                      className={styles.passwordtext}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button
                    onClick={() => {
                      handleVisiblePasswordChange();
                    }}
                    className={styles.eyes}
                  >
                    <img src={eyeIcon} alt="" />
                  </button>
                </div>
              </div>
              <div className={styles.password}>
                <div className={styles.passwordfield}>
                  <div className={styles.passwordfieldtext}>
                    <img alt="" className={styles.icons} />
                    <input
                      value={confirmPassword}
                      onChange={(e) => handleConfirmPasswordChange(e)}
                      type={visiblePasswordConfirm ? "text" : "password"}
                      className={styles.passwordtext}
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                  <button
                    onClick={() => {
                      handleVisiblePasswordConfirmChange();
                    }}
                    className={styles.eyes}
                  >
                    <img src={eyeIcon} alt="" />
                  </button>
                </div>
              </div>
              <div className={styles.email}>
                <div className={styles.emailfield}>
                  <img alt="" />
                  <input
                    value={phoneValue}
                    onChange={(e) => handlePhoneChange(e)}
                    type="text"
                    className={styles.emailtext}
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <p
                  className={
                    errorMessage === "Password is Match"
                      ? styles.match
                      : styles.notmatch
                  }
                >
                  {errorMessage}
                </p>
              </div>
              <button
                onClick={() => {
                  handleSignup();
                }}
                className={styles.signinbutton}
              >
                Create Account
              </button>
              <div className={styles.buttonfield}>
                <button onClick={() => {}} className={styles.signinwaybutton}>
                  <img src={googlelogo} alt="" className={styles.googleimage} />
                  <b>Continue with Google</b>
                  <div></div>
                </button>
                <div className={styles.textfield}>
                  <div>
                    Already have a account?{" "}
                    <span
                      className={styles.gotosignin}
                      onClick={() => {
                        navigation("/Sellers/Login");
                      }}
                    >
                      Login
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
