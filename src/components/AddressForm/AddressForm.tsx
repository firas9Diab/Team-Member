import { useEffect, useState } from "react";
import type { Address } from "../../types/types";
import styles from "./AddressForm.module.scss";

type Props = {
  mode: "add" | "edit";
  initialData?: Address;
  onSubmit: (data: Address) => void;
  onCancel: () => void;
};

const AddressForm = ({ mode, initialData, onSubmit, onCancel }: Props) => {
  const [name, setName] = useState("");
  const [flatHouseBuilding, setFlatHouseBuilding] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [alternativeMobileNumber, setAlternativeMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setName(initialData.name);
      setFlatHouseBuilding(initialData.flatHouseBuilding);
      setCity(initialData.city);
      setState(initialData.state);
      setCountry(initialData.country);
      setMobileNumber(initialData.mobileNumber);
      setAlternativeMobileNumber(initialData.alternativeMobileNumber || "");
      setPincode(initialData.pincode);
    }
  }, [mode, initialData]);

  const handleNameChange = (value: string) => setName(value);
  const handleBuildingChange = (value: string) => setFlatHouseBuilding(value);
  const handleCityChange = (value: string) => setCity(value);
  const handleStateChange = (value: string) => setState(value);
  const handleCountryChange = (value: string) => setCountry(value);
  const handleMobileChange = (value: string) => setMobileNumber(value);
  const handleAlternativeChange = (value: string) =>
    setAlternativeMobileNumber(value);
  const handlePinCodeChange = (value: string) => setPincode(value);

  const handleSubmit = () => {
    if (mode === "edit" && initialData) {
      onSubmit({
        id: initialData.id,
        name,
        flatHouseBuilding,
        city,
        state,
        country,
        mobileNumber,
        alternativeMobileNumber,
        pincode,
        isDefault: initialData.isDefault ?? false,
      });
    } else {
      onSubmit({
        name,
        flatHouseBuilding,
        city,
        state,
        country,
        mobileNumber,
        alternativeMobileNumber,
        pincode,
        isDefault: false,
      } as any);
    }
  };

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
