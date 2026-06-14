import styles from "./AddressForm.module.scss";
import useAddressForm from "../Hooks/useAddressForm";
import type { IAddressForm } from "../../interface/interface";

const AddressForm = ({
  mode,
  initialData,
  onSubmit,
  onCancel,
}: IAddressForm) => {
  const {
    name,
    alternativeMobileNumber,
    flatHouseBuilding,
    city,
    state,
    country,
    mobileNumber,
    pincode,
    handleNameChange,
    handleAlternativeChange,
    handleBuildingChange,
    handleCityChange,
    handleCountryChange,
    handleMobileChange,
    handlePinCodeChange,
    handleStateChange,
    handleSubmit,
  } = useAddressForm({
    initialData,
    mode,
    onSubmit,
    onCancel,
  });

  return (
    <div className={styles.add}>
      <div className={styles.addresscard}>
        <h2 className={styles.title}>
          {mode === "add"
            ? "Your Addresses / Add Address"
            : "Your Addresses / Edit Address"}
        </h2>

        <div className={styles.form}>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
          />
          <label>Country/Region</label>
          <input
            value={country}
            placeholder="India"
            onChange={(e) => handleCountryChange(e.target.value)}
          />
          <label>Flat, House no., Building, Company, Apartment</label>
          <input
            value={flatHouseBuilding}
            onChange={(e) => handleBuildingChange(e.target.value)}
          />
          <label>Mobile Number</label>
          <input
            value={mobileNumber}
            onChange={(e) => handleMobileChange(e.target.value)}
          />
          <label>Alternative Mobile Number</label>
          <input
            value={alternativeMobileNumber}
            onChange={(e) => handleAlternativeChange(e.target.value)}
          />
          <label>Pincode</label>
          <input
            value={pincode}
            placeholder="6 digits [0-9] PIN code"
            onChange={(e) => handlePinCodeChange(e.target.value)}
          />
          <label>City</label>
          <input
            value={city}
            onChange={(e) => handleCityChange(e.target.value)}
          />
          <label>State</label>
          <input
            value={state}
            onChange={(e) => handleStateChange(e.target.value)}
          />

          <button className={styles.save} onClick={handleSubmit}>
            {mode === "add" ? "Add New Address" : "Save Changes"}
          </button>

          <button className={styles.save} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
