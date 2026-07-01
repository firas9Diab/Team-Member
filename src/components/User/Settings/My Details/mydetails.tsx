import styles from "./MyDetails.module.scss";
import Date from "../../../../../public/icons/Date.svg";
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
    <div className={styles.detailsCard}>
      <p className={styles.detailsDescription}>
        Update your personal details quickly and conveniently right here.
        Whether you've got a new address, phone number, or just want to keep
        things current, this is the place to do it. Keep your profile up-to-date
        hassle-free.
      </p>
      <div className={styles.detailsForm}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleDataChange}
            className={styles.formInput}
            placeholder="Nandhu Santhosh"
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            disabled
            type="text"
            value={email}
            onChange={handleDataChange}
            className={styles.formInput}
            placeholder="nandhusanthosh@gmail.com"
          />
        </div>
        <div className={styles.formGroup}>
          <label>Phone</label>
          <input
            name="phone"
            type="text"
            value={phone}
            onChange={handleDataChange}
            className={styles.formInput}
            placeholder="6238973581"
          />
        </div>
        <div className={styles.formGroup}>
          <label>Date of Birth</label>
          <div className={styles.dateInputWrapper}>
            <input
              name="dateOfBirth"
              ref={ref}
              value={dateofBirth}
              onChange={handleDataChange}
              type="date"
              className={styles.dateInput}
            />
            <img
              src={Date}
              alt="date icon"
              onClick={() => ref.current?.showPicker?.()}
            />
          </div>
          {error}
        </div>
        <button className={styles.updateButton} onClick={handleUpdateuser}>
          Update Details
        </button>
      </div>
    </div>
  );
};
export default MyDetails;
