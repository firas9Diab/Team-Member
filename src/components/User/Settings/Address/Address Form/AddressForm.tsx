import styles from "./AddressForm.module.scss";
import useAddressForm from "./useAddressForm";
import type { IAddressForm } from "../../../../../Interfaces";

const AddressForm = ({
  address,
  mode,
  setMode,
  handleGetAddresses,
}: IAddressForm) => {
  const {
    handleDataChange,
    handleSubmitAddress,
    name,
    country,
    flatHouseBuilding,
    mobileNumber,
    alternativeMobileNumber,
    pincode,
    city,
    state,
    error,
  } = useAddressForm({ address, mode, setMode, handleGetAddresses });
  return (
    <div className={styles.addressForm}>
      <div className={styles.addressFormFields}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            value={name}
            name="name"
            type="text"
            onChange={handleDataChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Country/Region</label>
          <input
            value={country}
            name="country"
            type="text"
            onChange={handleDataChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Flat, House no., Building, Company, Apartment</label>
          <input
            value={flatHouseBuilding}
            name="flatHouseBuilding"
            type="text"
            onChange={handleDataChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Mobile Number</label>
          <input
            value={mobileNumber}
            name="mobileNumber"
            type="number"
            onChange={handleDataChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Alternative Mobile Number</label>
          <input
            value={alternativeMobileNumber}
            name="alternativeMobileNumber"
            type="number"
            onChange={handleDataChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Pincode</label>
          <input
            value={pincode}
            name="pincode"
            type="text"
            maxLength={6}
            onChange={handleDataChange}
            className={styles.formInput}
            placeholder="6 digits [0-9] PIN code"
          />
        </div>
        <div className={styles.formGroup}>
          <label>City</label>
          <input
            value={city}
            name="city"
            type="text"
            onChange={handleDataChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label>State</label>
          <input
            value={state}
            name="state"
            type="text"
            onChange={handleDataChange}
            className={styles.formInput}
          />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button
          type="button"
          className={styles.submitAddressButton}
          onClick={handleSubmitAddress}
        >
          {mode === "Add" ? "Add new Address" : "Update Address"}
        </button>
      </div>
    </div>
  );
};
export default AddressForm;
