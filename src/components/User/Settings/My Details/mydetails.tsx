import styles from "./MyDetails.module.scss";
import date from "../../../../../public/Icons/date.svg";
import useMyDetails from "./useMyDetails";

const MyDetails = () => {
  const {
    ref,
    name,
    handleDataChange,
    email,
    phone,
    dateofBirth,
    error,
    handleUpdateuser,
  } = useMyDetails();

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
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleDataChange}
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
            onChange={handleDataChange}
            className={styles.inputfield}
            placeholder="nandhusanthosh@gmail.com"
          />
        </div>
        <div className={styles.inputfields}>
          Phone
          <input
            name="phone"
            type="text"
            value={phone}
            onChange={handleDataChange}
            className={styles.inputfield}
            placeholder="6238973581"
          />
        </div>
        <div className={styles.inputfields}>
          Date of Birth{" "}
          <div className={styles.inputfield}>
            <input
              name="dateOfBirth"
              ref={ref}
              value={dateofBirth}
              onChange={handleDataChange}
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
        <button className={styles.inputfieldbutton} onClick={handleUpdateuser}>
          Update Details
        </button>
      </div>
    </div>
  );
};

export default MyDetails;
