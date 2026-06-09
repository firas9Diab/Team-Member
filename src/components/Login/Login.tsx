import { useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import Google from "../../Assets/Google.svg";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isFormValid = email.trim() && password.trim();

  const navigate = useNavigate();
  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3000/Auth/login", {
        email,
        password,
      });
      if (response.data.data.accessToken) {
        localStorage.setItem("token", response.data.data.accessToken);
        navigate("/");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };

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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <div className={styles.email}>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.error}>{error ? <p>{error}</p> : ""}</div>
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
              <button onClick={() => navigate("/Sign")}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blueBackground}></div>
    </div>
  );
};

export default Login;
