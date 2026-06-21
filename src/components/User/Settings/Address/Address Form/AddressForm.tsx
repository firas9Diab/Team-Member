import styles from "./AddressForm.module.scss";
import useAddressForm from "./useAddressForm";
import type { IAddressForm } from "../../../../interface";

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
    <div className={styles.settingsworkform}>
      <div className={styles.settingsinputfields}>
        <div className={styles.inputfields}>
          <label>Name</label>
          <input
            value={name}
            name="name"
            type="text"
            onChange={handleDataChange}
            className={styles.inputfield}
          />
        </div>

        <div className={styles.inputfields}>
          <label>Country/Region</label>
          <input
            value={country}
            name="country"
            type="text"
            onChange={handleDataChange}
            className={styles.inputfield}
          />
        </div>

        <div className={styles.inputfields}>
          <label>Flat, House no., Building, Company, Apartment</label>
          <input
            value={flatHouseBuilding}
            name="flatHouseBuilding"
            type="text"
            onChange={handleDataChange}
            className={styles.inputfield}
          />
        </div>

        <div className={styles.inputfields}>
          <label>Mobile Number</label>
          <input
            value={mobileNumber}
            name="mobileNumber"
            type="number"
            onChange={handleDataChange}
            className={styles.inputfield}
          />
        </div>

        <div className={styles.inputfields}>
          <label>Alternative Mobile Number</label>
          <input
            value={alternativeMobileNumber}
            name="alternativeMobileNumber"
            type="number"
            onChange={handleDataChange}
            className={styles.inputfield}
          />
        </div>

        <div className={styles.inputfields}>
          <label>Pincode</label>
          <input
            value={pincode}
            name="pincode"
            type="text"
            maxLength={6}
            onChange={handleDataChange}
            className={styles.inputfield}
            placeholder="6 digits [0-9] PIN code"
          />
        </div>

        <div className={styles.inputfields}>
          <label>City</label>
          <input
            value={city}
            name="city"
            type="text"
            onChange={handleDataChange}
            className={styles.inputfield}
          />
        </div>

        <div className={styles.inputfields}>
          <label>State</label>
          <input
            value={state}
            name="state"
            type="text"
            onChange={handleDataChange}
            className={styles.inputfield}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button
          type="button"
          className={styles.inputfieldbutton}
          onClick={handleSubmitAddress}
        >
          {mode === "Add" ? "Add new Address" : "Update Address"}
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
