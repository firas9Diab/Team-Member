import usePassword from "./usePassword";
import styles from "./Password.module.scss";

const Password = () => {
  const {
    oldPassword,
    newPassword,
    confirmNewPassword,
    handleOldPasswordChange,
    handleNewPasswordChange,
    handleConfirmPasswordChange,
    handleUpdatePassword,
    showMessage,
    error,
  } = usePassword();

  return (
    <>
      <h2 className={styles.title}> Update Password</h2>
      <form className={styles.form}>
        <label> Old Password</label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => handleOldPasswordChange(e.target.value)}
        />
        <label> New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => handleNewPasswordChange(e.target.value)}
        />
        <label> Confirm Password</label>
        <input
          type="password"
          value={confirmNewPassword}
          onChange={(e) => handleConfirmPasswordChange(e.target.value)}
        />
        {!!showMessage && <p className={styles.falseValue}>{showMessage}</p>}

        <button
          type="button"
          onClick={handleUpdatePassword}
          className={styles.save}
        >
          Update Password
        </button>
      </form>
    </>
  );
};

export default Password;
