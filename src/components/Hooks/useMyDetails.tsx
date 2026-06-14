import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import Swal from "sweetalert2";

const useMyDetails = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

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
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = response.data.data;
      setFullName(user.fullName);
      setEmail(user.email);
      setPhone(user.phone);
      setDateOfBirth(moment(user.dateOfBirth).format("YYYY-MM-DD"));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.patch(
        "http://localhost:3000/users/me",
        {
          fullName,
          phone,
          dateOfBirth,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      Swal.fire({
        icon: "success",
        title: "Details updated successfully!",
      });
    } catch (error) {
      console.log(error);
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
