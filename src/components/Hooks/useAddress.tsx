import { useEffect, useState } from "react";
import type { AddressType } from "../../interface/interface";
import requestBuilder from "../utility/requestBuilder";

const useAddress = () => {
  const [addresses, setAddresses] = useState<AddressType[]>([]);

  const [mode, setMode] = useState<"list" | "add" | "edit">("list");
  const [selectedAddress, setSelectedAddress] = useState<
    AddressType | undefined
  >();

  const fetchUserAddress = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/addresses",
        method: "GET",
      });

      setAddresses(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddAddress = async (data: AddressType) => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/addresses",
        method: "POST",
        data: data,
      });

      setAddresses((prev) => [...prev, response.data.data]);
      setMode("list");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditAddress = async (data: AddressType) => {
    const { id, ...cleanData } = data;

    try {
      await requestBuilder({
        url: `http://localhost:3000/addresses/${id}`,
        method: "PATCH",
        data: cleanData,
      });

      fetchUserAddress();
      setMode("list");
      setSelectedAddress(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await requestBuilder({
        url: `http://localhost:3000/addresses/${id}`,
        method: "DELETE",
      });

      fetchUserAddress();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserAddress();
  }, []);

  return {
    addresses,
    mode,
    setMode,
    selectedAddress,
    setSelectedAddress,
    handleAddAddress,
    handleEditAddress,
    handleDelete,
  };
};

export default useAddress;
