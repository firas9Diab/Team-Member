import styles from "../Settings/Settings.module.scss";
import date from "../../../../public/Icons/date.svg";
import useSettings from "./useSettings";

const Settings = () => {
  const {
    ref,
    name,
    handleNameChange,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    dateofBirth,
    handleDateOfBirthChange,
    error,
    handleUpdateuser,
  } = useSettings();

  return (
    <div className={styles.settingspage}>
      <p className={styles.title}>Settings</p>
      <div className={styles.flexrowsettings}>
        <aside className={styles.settingsnavbar}>
          <nav>My Details</nav>
          <nav>Address</nav>
          <nav>Password</nav>
        </aside>

        <div className={styles.settingswork}>
          <p className={styles.settingsworkparegraph}>
            Update your personal details quickly and conveniently right
            here.Whether you've got a new address, phone number, or just want to
            keep things current, this is the place to do it.Keep your profile
            up-to-date hassle-free.
          </p>

          <div className={styles.settingsinputfields}>
            <div className={styles.inputfields}>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e)}
                className={styles.inputfield}
                placeholder="Nandhu Santhosh"
              />
            </div>
            <div className={styles.inputfields}>
              <label>Email</label>
              <input
                disabled
                type="text"
                value={email}
                onChange={(e) => handleEmailChange(e)}
                className={styles.inputfield}
                placeholder="nandhusanthosh@gmail.com"
              />
            </div>
            <div className={styles.inputfields}>
              Phone
              <input
                type="text"
                value={phone}
                onChange={(e) => handlePhoneChange(e)}
                className={styles.inputfield}
                placeholder="6238973581"
              />
            </div>
            <div className={styles.inputfields}>
              Date of Birth{" "}
              <div className={styles.inputfield}>
                <input
                  ref={ref}
                  value={dateofBirth}
                  onChange={(e) => handleDateOfBirthChange(e)}
                  id="dateOfBirth"
                  type="date"
                  className={styles.inputfielddate}
                />
                <img
                  src={date}
                  alt="date icon"
                  onClick={() => ref.current?.showPicker?.()}
                />
              </div>
              {error}
            </div>
            <button
              className={styles.inputfieldbutton}
              onClick={() => {
                handleUpdateuser();
              }}
            >
              Update Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
