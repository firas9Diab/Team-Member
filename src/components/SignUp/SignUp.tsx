import styles from "./SignUp.module.scss";
import Google from "../../Assets/Google.svg";
import useSignUp from "../Hooks/useSignUp";

const Sign = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleFullNameChange,
    handleConfirmPasswordChange,
    handlePhoneChange,
    showMessage,
    error,
    signUp,
    isFormValid,
    navigate,
  } = useSignUp();

  return (
    <div className={styles.sign}>
      <div className={styles.card}>
        <div className={styles.create}>
          <h1>Sign up</h1>
          <p>Shop Smarter,Shop Easier: Your One-Stop Online Marketplace</p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.email}>
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) => handleFullNameChange(e.target.value)}
            />
          </div>
          <div className={styles.email}>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => handleEmailChange(e.target.value)}
              required
            />
          </div>

          <div className={styles.email}>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
            />
          </div>

          <div className={styles.email}>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              required
            />
          </div>

          <div className={styles.email}>
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => handlePhoneChange(e.target.value)}
              required
            />
          </div>
          {showMessage && <p className={styles.falseValue}>{showMessage}</p>}

          {error && (
            <div className={styles.falseValue}>
              <p>{error}</p>
            </div>
          )}

          <button
            type="button"
            disabled={!isFormValid}
            className={styles.button}
            onClick={signUp}
          >
            Sign up
          </button>
          <hr />

          <button className={styles.google} type="button">
            <img src={Google} alt="google" />
            <p>Continue with Google</p>
          </button>
          <div className={styles.account}>
            <p>Already have a account ?</p>
            <button onClick={() => navigate("/login")}>Log in</button>
          </div>
        </form>
      </div>
      <div className={styles.blueBackground}></div>
    </div>
  );
};

export default Sign;
