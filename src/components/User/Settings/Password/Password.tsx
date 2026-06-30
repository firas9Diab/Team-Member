import styles from "./Password.module.scss";
import usePassword from "./usePassword";
import eyeIcon from "../../../../../public/Icons/EyeIcon.svg";

const Password = () => {
  const {
    visibleOldPassword,
    visibleNewPassword,
    visibleNewPasswordConfirm,
    oldPassword,
    newPassword,
    confirmNewPassword,
    error,
    handleDataChange,
    handleUpdatePassword,
    handleVisibleChange,
  } = usePassword();
  return (
    <div className={styles.settingswork}>
      <p className={styles.settingsworkparegraph}>
        Update your personal details quickly and conveniently right here.Whether
        you've got a new address, phone number, or just want to keep things
        current, this is the place to do it.Keep your profile up-to-date
        hassle-free.
      </p>
      <div className={styles.settingsinputfields}>
        <div className={styles.inputfields}>
          <label>Old Password</label>
          <div className={styles.inputfield}>
            <input
              name="oldPassword"
              type={visibleOldPassword ? "text" : "password"}
              value={oldPassword}
              onChange={handleDataChange}
              className={styles.passwordfield}
            />
            <img
              onClick={() => handleVisibleChange("oldPassword")}
              src={eyeIcon}
              alt=""
            />
          </div>
        </div>
        <div className={styles.inputfields}>
          <label>New Password</label>
          <div className={styles.inputfield}>
            <input
              name="newPassword"
              type={visibleNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={handleDataChange}
              className={styles.passwordfield}
            />
            <img
              onClick={() => handleVisibleChange("newPassword")}
              src={eyeIcon}
              alt=""
            />
          </div>
        </div>
        <div className={styles.inputfields}>
          <label>Confirm New Password</label>
          <div className={styles.inputfield}>
            <input
              name="confirmNewPassword"
              type={visibleNewPasswordConfirm ? "text" : "password"}
              value={confirmNewPassword}
              onChange={handleDataChange}
              className={styles.passwordfield}
            />
            <img
              onClick={() => handleVisibleChange("confirmNewPassword")}
              src={eyeIcon}
              alt=""
            />
          </div>
          {error}
        </div>
        <button
          className={styles.inputfieldbutton}
          onClick={handleUpdatePassword}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};
export default Password;
