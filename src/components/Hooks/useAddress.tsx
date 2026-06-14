import axios from "axios";
import { useEffect, useState } from "react";
import type { AddressType } from "../../interface/interface";

const useAddress = () => {
  const [addresses, setAddresses] = useState<AddressType[]>([]);

  const [mode, setMode] = useState<"list" | "add" | "edit">("list");
  const [selectedAddress, setSelectedAddress] = useState<
    AddressType | undefined
  >();

  const fetchUserAddress = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:3000/addresses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAddresses(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddAddress = async (data: AddressType) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:3000/addresses",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      setAddresses((prev) => [...prev, response.data.data]);
      setMode("list");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditAddress = async (data: AddressType) => {
    const token = localStorage.getItem("token");

    const { id, ...cleanData } = data;

    try {
      await axios.patch(`http://localhost:3000/addresses/${id}`, cleanData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      fetchUserAddress();
      setMode("list");
      setSelectedAddress(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:3000/addresses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
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
