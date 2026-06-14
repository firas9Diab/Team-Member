import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const useSettings = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [dateofBirth, setDateofBirth] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setName(e.target.value);
  };
  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setPhone(e.target.value);
  };
  const handleDateOfBirthChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setDateofBirth(e.target.value);
  };
  const fetchUserById = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`http://localhost:3000/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setName(response.data.data.fullName);
      setEmail(response.data.data.email);
      setPhone(response.data.data.phone);
      setDateofBirth(response.data.data.dateOfBirth.slice(0, 10));
      console.log(response.data.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to load user");
    }
  };

  useEffect(() => {
    fetchUserById();
  }, []);

  const handleUpdateuser = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.patch(
        "http://localhost:3000/users/me",
        {
          fullName: name,
          phone: phone,
          dateOfBirth: dateofBirth,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setError("Updated Successfull!");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update user");
    }
  };
  return {
    ref,
    name,
    handleNameChange,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    dateofBirth,
    handleDateOfBirthChange,
    error,
    handleUpdateuser,
  };
};

export default useSettings;
