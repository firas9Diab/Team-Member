import { useEffect, useState } from "react";
import type { AddressType, IAddressForm } from "../../interface/interface";
import Swal from "sweetalert2";

const useAddressForm = ({ initialData, mode, onSubmit }: IAddressForm) => {
  const [name, setName] = useState("");
  const [flatHouseBuilding, setFlatHouseBuilding] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [alternativeMobileNumber, setAlternativeMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");

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
    if (
      !name ||
      !country ||
      !flatHouseBuilding ||
      !mobileNumber ||
      !pincode ||
      !city ||
      !state
    ) {
      Swal.fire({
        icon: "info",
        title: "Please fill all required fields",
      });

      return;
    }

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
      } as AddressType);
    }
  };

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

  return {
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
  };
};

export default useAddressForm;
