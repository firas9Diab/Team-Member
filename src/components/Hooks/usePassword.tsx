import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const usePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleOldPasswordChange = (value: string) => {
    setOldPassword(value);
  };

  const handleNewPasswordChange = (value: string) => {
    setNewPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmNewPassword(value);
  };

  const handleUpdatePassword = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        "http://localhost:3000/users/me/password",
        {
          oldPassword,
          newPassword,
          confirmNewPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      setOldPassword("");
      setNewPassword("");
      setConfirmNewPassword("");

      Swal.fire({
        icon: "success",
        title: "Details updated successfully!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    oldPassword,
    newPassword,
    confirmNewPassword,
    handleOldPasswordChange,
    handleNewPasswordChange,
    handleConfirmPasswordChange,
    handleUpdatePassword,
  };
};

export default usePassword;
