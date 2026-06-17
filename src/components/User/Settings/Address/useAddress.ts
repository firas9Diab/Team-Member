import axios from "axios";
import { useEffect, useState } from "react";
import type { Address } from "../../../interface";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

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
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      const swalWithBootstrapButtons = Swal.mixin({});
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Address deleted successfully!",
              icon: "success",
            });

            axios.delete(`http://localhost:3000/addresses/${address.id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            handleGetAddresses();
            setMode("view");
            setSelectedAddress(null);
          } else if (result.dismiss === Swal.DismissReason.cancel)
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Address Not deleted",
              icon: "error",
            });
        });
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
