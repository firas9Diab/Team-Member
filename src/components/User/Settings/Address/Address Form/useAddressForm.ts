import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import type { IAddressForm } from "../../../../interface";
import RequestBuilder from "../../../../services/RequestBuilder";

const useAddressForm = ({
  address,
  mode,
  setMode,
  handleGetAddresses,
}: IAddressForm) => {
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

  const handleSubmitAddress = async () => {
    try {
      if (mode === "Add") {
        await RequestBuilder({
          url: "/addresses",
          method: "POST",
          data: {
            name,
            country,
            flatHouseBuilding,
            mobileNumber,
            alternativeMobileNumber,
            pincode,
            city,
            state,
          },
        });

      

        await Swal.fire({
          title: "Address added successfully!",
          icon: "success",
          draggable: true,
        });
        await handleGetAddresses();
        setMode("view");
      } else {
        if (!address) {
          setError("Address not found");
          return;
        }

         await RequestBuilder({
          url: `/addresses/${address.id}`,
          method: "PATCH",
          data: {
            name,
            country,
            flatHouseBuilding,
            mobileNumber,
            alternativeMobileNumber,
            pincode,
            city,
            state,
          },
        });

       

        await Swal.fire({
          title: "Address updated successfully!",
          icon: "success",
          draggable: true,
        });
        await handleGetAddresses();
        setMode("view");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to save Address");
    }
  };

  useEffect(() => {
    if (mode === "Edit" && address) {
      setName(address.name);
      setFlatHouseBuilding(address.flatHouseBuilding);
      setCity(address.city);
      setState(address.state);
      setCountry(address.country);
      setMobileNumber(address.mobileNumber);
      setAlternativeMobileNumber(address.alternativeMobileNumber || "");
      setPincode(address.pincode);
    }
  }, [mode, address]);

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
