import styles from "../Sign Up/SignUp.module.scss";
import googlelogo from "../../../../public/icons/google-logo.svg";
import useSignUp from "./useSignUp";
import eyeIcon from "../../../../public/icons/EyeIcon.svg";
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
    <div className={styles.signUpPage}>
      <div className={styles.signUpContainer}>
        <div className={styles.signUpCard}>
          <div className={styles.signUpContent}>
            <div className={styles.signUpHeader}>
              <h1>Sign up</h1>
              <p>Shop Smarter, Shop Easier: Your One-Stop</p>
            </div>
            <div className={styles.signUpForm}>
              <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <div></div>
                  <input
                    value={fullName}
                    onChange={(e) => handleFullNameChange(e)}
                    type="text"
                    className={styles.inputText}
                    placeholder="Full name"
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <img alt="" />
                  <input
                    value={emailValue}
                    onChange={(e) => handleEmailChange(e)}
                    type="email"
                    className={styles.inputText}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.passwordWrapper}>
                  <div className={styles.passwordInputWrapper}>
                    <img alt="" className={styles.inputIcon} />
                    <input
                      value={password}
                      onChange={(e) => handlePasswordChange(e)}
                      type={visiblePassword ? "text" : "password"}
                      className={styles.passwordInput}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button
                    onClick={() => {
                      handleVisiblePasswordChange();
                    }}
                    className={styles.passwordToggle}
                  >
                    <img src={eyeIcon} alt="" />
                  </button>
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.passwordWrapper}>
                  <div className={styles.passwordInputWrapper}>
                    <img alt="" className={styles.inputIcon} />
                    <input
                      value={confirmPassword}
                      onChange={(e) => handleConfirmPasswordChange(e)}
                      type={visiblePasswordConfirm ? "text" : "password"}
                      className={styles.passwordInput}
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                  <button
                    onClick={() => {
                      handleVisiblePasswordConfirmChange();
                    }}
                    className={styles.passwordToggle}
                  >
                    <img src={eyeIcon} alt="" />
                  </button>
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <img alt="" />
                  <input
                    value={phoneValue}
                    onChange={(e) => handlePhoneChange(e)}
                    type="text"
                    className={styles.inputText}
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <p
                  className={
                    errorMessage === "Password is Match"
                      ? styles.match
                      : styles.notMatch
                  }
                >
                  {errorMessage}
                </p>
              </div>
              <button
                onClick={() => {
                  handleSignup();
                }}
                className={styles.createAccountButton}
              >
                Create Account
              </button>
              <div className={styles.authActions}>
                <button onClick={() => {}} className={styles.googleButton}>
                  <img src={googlelogo} alt="" />
                  <b>Continue with Google</b>
                  <div></div>
                </button>
                <div className={styles.loginRedirect}>
                  <div>
                    Already have a account?{" "}
                    <span
                      className={styles.loginLink}
                      onClick={() => {
                        navigation("/User/Login");
                      }}
                    >
                      Login
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sideCard}></div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
