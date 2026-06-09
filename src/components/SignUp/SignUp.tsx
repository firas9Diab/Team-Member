import { useState } from "react";
import styles from "./SignUp.module.scss";
import { useNavigate } from "react-router-dom";
import Google from "../../Assets/Google.svg";
import axios from "axios";

const Sign = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showMassage, setShowMassage] = useState("");
  const [error, setError] = useState("");

  const signUp = async () => {
    if (password === confirmPassword) {
      setShowMassage("");

      try {
        const response = await axios.post("http://localhost:3000/auth/signup", {
          fullName,
          email,
          password,
          confirmPassword,
          phone,
        });
        if (response.data.data.accessToken) {
          localStorage.setItem("token", response.data.data.accessToken);
          navigate("/");
        }
      } catch (error: any) {
        console.log(error.response?.data);
        setError(error.response?.data?.message || "Error occurred");
      }
    } else {
      setShowMassage("Passwords do not match");
    }
  };
  const navigate = useNavigate();

  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    phone.trim() !== "";

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
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className={styles.email}>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.email}>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.email}>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.email}>
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          {showMassage && <p className={styles.falseValue}>{showMassage}</p>}

          {error && (
            <div className={styles.falseValue}>
              <p>{error}</p>
            </div>
          )}

          <button
            type="button"
            disabled={!isFormValid}
            className={styles.button}
            onClick={() => {
              signUp();
            }}
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
