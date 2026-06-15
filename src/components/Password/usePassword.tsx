import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import requestBuilder from "../utility/requestBuilder";
const usePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showMessage, setShowMessage] = useState("");
  const [error, setError] = useState("");

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
    setShowMessage("");
    if (newPassword !== confirmNewPassword) {
      setShowMessage("Passwords do not match");
      return;
    }
    if (newPassword.length < 8) {
      setShowMessage("Password must be longer than or equal to 8 characters ");
      return;
    }

    try {
      await requestBuilder({
        url: "http://localhost:3000/users/me/password",
        method: "PATCH",
        data: {
          oldPassword,
          newPassword,
          confirmNewPassword,
        },
      });
      setOldPassword("");
      setNewPassword("");
      setConfirmNewPassword("");

      Swal.fire({
        icon: "success",
        title: "Details updated successfully!",
      });
    } catch (error: any) {
      setShowMessage(
        error.response?.data?.errors?.join(", ") ||
          error.response?.data?.message,
      );
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
    showMessage,
    error,
  };
};

export default usePassword;
