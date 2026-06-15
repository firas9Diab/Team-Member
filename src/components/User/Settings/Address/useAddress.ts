import axios from "axios";
import { useEffect, useState } from "react";

interface Address {
  id: number;
  name: string;
  country: string;
  flatHouseBuilding: string;
  mobileNumber: string;
  alternativeMobileNumber: string;
  pincode: string;
  city: string;
  state: string;
  isDefault: boolean;
}

const useAddress = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [mode, setMode] = useState<string>("view");
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const handleGetAddresses = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:3000/addresses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAddresses(response.data.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to load addresses");
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteAddresses = async (address: Address) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this address?",
    );

    if (!isConfirmed) {
      return;
    }

    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:3000/addresses/${address.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Address deleted successfully!");

      await handleGetAddresses();
      setMode("view");
      setSelectedAddress(null);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete address");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAddresses();
  }, []);

  return {
    addresses,
    error,
    loading,
    mode,
    setMode,
    selectedAddress,
    setSelectedAddress,
    handleDeleteAddresses,
  };
};

export default useAddress;
