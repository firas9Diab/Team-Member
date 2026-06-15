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
            required
          />

          <label>Country/Region</label>
          <input
            value={country}
            placeholder="India"
            onChange={(e) => handleCountryChange(e.target.value)}
            required
          />
          <label>Flat, House no., Building, Company, Apartment</label>
          <input
            value={flatHouseBuilding}
            onChange={(e) => handleBuildingChange(e.target.value)}
            required
          />
          <label>Mobile Number</label>
          <input
            value={mobileNumber}
            type="number"
            onChange={(e) => handleMobileChange(e.target.value)}
            required
          />
          <label>Alternative Mobile Number</label>
          <input
            value={alternativeMobileNumber}
            type="number"
            onChange={(e) => handleAlternativeChange(e.target.value)}
            required
          />
          <label>Pincode</label>
          <input
            value={pincode}
            type="number"
            placeholder="6 digits [0-9] PIN code"
            onChange={(e) => handlePinCodeChange(e.target.value)}
            required
          />
          <label>City</label>
          <input
            value={city}
            onChange={(e) => handleCityChange(e.target.value)}
            required
          />
          <label>State</label>
          <input
            value={state}
            onChange={(e) => handleStateChange(e.target.value)}
            required
          />

          <button type="button" className={styles.save} onClick={handleSubmit}>
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
