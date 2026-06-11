import styles from "./Login.module.scss";
import Google from "../../Assets/Google.svg";
import useLogin from "../Hooks/useLogin";

const Login = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    error,
    login,
    isFormValid,
    navigate,
  } = useLogin();

  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.welcome}>
          <h1> Welcome Back</h1>
          <p>Shop Smarter, Shop Easier: Your One-Stop Online Marketplace</p>
        </div>
        <div className={styles.form}>
          <div className={styles.email}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => handleEmailChange(e.target.value)}
              required
            />
          </div>
          <div>
            <div className={styles.email}>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => handlePasswordChange(e.target.value)}
                required
              />
            </div>
            {!!error && <p className={styles.errorMessage}>{error}</p>}
          </div>
          <button
            type="button"
            className={styles.button}
            disabled={!isFormValid}
            onClick={login}
          >
            Login
          </button>

          <hr />

          <button className={styles.google}>
            <img src={Google} alt="google" />
            <p>Continue with Google</p>
          </button>

          <div className={styles.accountContainer}>
            <button className={styles.forget}>Forgot password?</button>
            <div className={styles.account}>
              <p>Need a Account?</p>
              <button onClick={() => navigate("/sign")}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blueBackground}></div>
    </div>
  );
};

export default Login;
