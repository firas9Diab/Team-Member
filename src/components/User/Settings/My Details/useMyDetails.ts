import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import RequestBuilder from "../../../services/RequestBuilder";

const useMyDetails = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [dateofBirth, setDateofBirth] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "dateOfBirth":
        setDateofBirth(value);
        break;
      default:
        break;
    }
  };
  const fetchUserById = async () => {
    try {
      setError("");
      const response = await RequestBuilder({
        url: "/auth/me",
        method: "GET",
      });
      setName(response.data.fullName);
      setEmail(response.data.email);
      setPhone(response.data.phone);
      const dateFromApi = response.data.dateOfBirth;
      setDateofBirth(dateFromApi ? dateFromApi.slice(0, 10) : "");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to load user");
    }
  };
  const handleUpdateuser = async () => {
    try {
      setError("");
      await RequestBuilder({
        url: "/users/me",
        method: "PATCH",
        data: {
          fullName: name,
          phone,
          dateOfBirth: dateofBirth,
        },
      });
      Swal.fire({
        title: "Updated Successfully!",
        icon: "success",
      });
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update user");
    }
  };
  useEffect(() => {
    fetchUserById();
  }, []);
  return {
    ref,
    name,
    email,
    phone,
    dateofBirth,
    error,
    handleDataChange,
    handleUpdateuser,
  };
};
export default useMyDetails;
