import useMyDetails from "../Hooks/useMyDetails";
import styles from "./MyDetails.module.scss";

const MyDetails = () => {
  const {
    fullName,
    email,
    phone,
    dateOfBirth,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleDateOfBirthChange,
    handleUpdateDetails,
  } = useMyDetails();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>
          Update your personal details quickly and conveniently right
          here.Whether you've got a new address, phone number, or just want to
          keep things current, this is the place to do it.Keep your profile
          up-to-date hassle-free.
        </p>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Nandhu Santhosh"
            value={fullName}
            onChange={(e) => handleNameChange(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="nandhusanthosh@gmail.com"
            disabled
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            disabled
          />
          <label>Phone</label>
          <input
            type="tel"
            placeholder="6238973581"
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
          />
          <label>Date of Birth</label>
          <input
            type="date"
            placeholder="18/09/2002"
            value={dateOfBirth}
            onChange={(e) => handleDateOfBirthChange(e.target.value)}
          />
          <button type="button" onClick={handleUpdateDetails}>
            Update Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyDetails;
