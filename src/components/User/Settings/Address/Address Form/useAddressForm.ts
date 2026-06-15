import axios from "axios";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import type { Address, Mode } from "../../../../interface";

const useAddressForm = (Address: Address | null, mode: Mode) => {
  const [name, setName] = useState<string>("");
  const [flatHouseBuilding, setFlatHouseBuilding] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [alternativeMobileNumber, setAlternativeMobileNumber] =
    useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "country":
        setCountry(value);
        break;

      case "flatHouseBuilding":
        setFlatHouseBuilding(value);
        break;

      case "mobileNumber":
        setMobileNumber(value);
        break;

      case "alternativeMobileNumber":
        setAlternativeMobileNumber(value);
        break;

      case "pincode":
        setPincode(value);
        break;

      case "city":
        setCity(value);
        break;

      case "state":
        setState(value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (mode === "Edit" && Address) {
      setName(Address.name);
      setFlatHouseBuilding(Address.flatHouseBuilding);
      setCity(Address.city);
      setState(Address.state);
      setCountry(Address.country);
      setMobileNumber(Address.mobileNumber);
      setAlternativeMobileNumber(Address.alternativeMobileNumber || "");
      setPincode(Address.pincode);
    }
  }, [mode, Address]);

  const handleSubmitAddress = async () => {
    try {
      const token = localStorage.getItem("token");

      if (mode === "Add") {
        await axios.post(
          "http://localhost:3000/addresses",
          {
            name,
            country,
            flatHouseBuilding,
            mobileNumber,
            alternativeMobileNumber,
            pincode,
            city,
            state,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        alert("Address added successfully!");
      } else {
        if (!Address) {
          setError("Address not found");
          return;
        }

        await axios.patch(
          `http://localhost:3000/addresses/${Address.id}`,
          {
            name,
            country,
            flatHouseBuilding,
            mobileNumber,
            alternativeMobileNumber,
            pincode,
            city,
            state,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        alert("Address updated successfully!");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to save Address");
    }
  };

  return {
    name,
    country,
    flatHouseBuilding,
    mobileNumber,
    alternativeMobileNumber,
    pincode,
    city,
    state,
    error,
    handleDataChange,
    handleSubmitAddress,
  };
};

export default useAddressForm;
