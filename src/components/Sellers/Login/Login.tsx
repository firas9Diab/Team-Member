import styles from "../Login/Login.module.scss";
import useLogin from "./useLogin";
import googlelogo from "../../../../public/Icons/google-logo.png";
import eyeIcon from "../../../../public/Icons/EyeIcon.svg";

const Login = () => {
  const {
    password,
    setPassword,
    errormessage,
    emailValue,
    setEmailValue,
    handleSignIn,
    navigation,
      visiblePassword,
    setvisiblePassword
  } = useLogin();

  return (
    <div className={styles.signupbody}>
      <div className={styles.signupcontainer}>
        <div className={styles.signupcard}>
          <div className={styles.signupdesc}>
            <div className={styles.signuptext}>
              <h2>Login to Your Seller Account</h2>
              <p>Shop Smarter, Shop Easier: Your One-Stop Online Marketplace</p>
            </div>

            <div className={styles.signupfield}>
              <div className={styles.email}>
                <div className={styles.emailfield}>
                  <img alt="" />
                  <input
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                      type={visiblePassword?"text":"password"}
                      className={styles.passwordtext}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button 
                  onClick={() => {
                      setvisiblePassword(!visiblePassword);
                    }}
                  className={styles.eyes}>
                      <img src={eyeIcon} alt="" />
                  </button>
                </div>
              </div>
              {errormessage}
              <button
                onClick={() => {
                  handleSignIn();
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
                  <div>Forgot password?</div>
                  <div>
                    Need a Account?{" "}
                    <span
                      onClick={() => {
                        navigation("/Sellers/SignUp");
                      }}
                      className={styles.gotosignup}
                    >
                      Signin
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {
            //--------------
          }
          <div className={styles.card}></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
