import axios from "axios";
import { useEffect, useState } from "react";
import type { Address } from "../../../interface";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import RequestBuilder from "../../../services/RequestBuilder";

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
      const response = await axios(
        RequestBuilder({ url: "/addresses", method: "GET" }),
      );
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
        .then(async (result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Address deleted successfully!",
              icon: "success",
            });

            await axios(
              RequestBuilder({
                url: `/addresses/${address.id}`,
                method: "DELETE",
              }),
            );
            await handleGetAddresses();
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
    handleGetAddresses,
  };
};

export default useAddress;
