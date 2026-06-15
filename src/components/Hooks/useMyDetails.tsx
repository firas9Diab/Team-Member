import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import Swal from "sweetalert2";
import requestBuilder from "../utility/requestBuilder";

const useMyDetails = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [initialFullName, setInitialFullName] = useState("");
  const [initialPhone, setInitialPhone] = useState("");
  const [initialDateOfBirth, setInitialDateOfBirth] = useState("");

  const handleNameChange = (value: string) => {
    setFullName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  const handleDateOfBirthChange = (value: string) => {
    setDateOfBirth(value);
  };

  const fetchUserDetails = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/users/me",
        method: "GET",
      });

      const user = response.data.data;
      setFullName(user.fullName);
      setEmail(user.email);
      setPhone(user.phone);
      setDateOfBirth(moment(user.dateOfBirth).format("YYYY-MM-DD"));

      setInitialFullName(user.fullName);
      setInitialPhone(user.phone);
      setInitialDateOfBirth(moment(user.dateOfBirth).format("YYYY-MM-DD"));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateDetails = async () => {
    if (
      fullName === initialFullName &&
      phone === initialPhone &&
      dateOfBirth === initialDateOfBirth
    ) {
      Swal.fire({
        icon: "error",
        title: "No changes made",
      });
      return;
    }
    if (!fullName || !phone || !dateOfBirth) {
      Swal.fire({
        icon: "info",
        title: "Please fill all required fields",
      });

      return;
    }

    try {
      await requestBuilder({
        url: "http://localhost:3000/users/me",
        method: "PATCH",
        data: {
          fullName,
          phone,
          dateOfBirth,
        },
      });

      Swal.fire({
        icon: "success",
        title: "Details updated successfully!",
      });
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return {
    fullName,
    email,
    phone,
    dateOfBirth,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleDateOfBirthChange,
    fetchUserDetails,
    handleUpdateDetails,
  };
};

export default useMyDetails;
