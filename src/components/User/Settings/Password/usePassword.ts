import axios from "axios";
import React, { useState } from "react";

const usePassword = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [visibleOldPassword, setVisibleOldPassword] = useState<boolean>(false);
  const [visibleNewPassword, setVisibleNewPassword] = useState<boolean>(false);
  const [visibleNewPasswordConfirm, setVisibleNewPasswordConfirm] =
    useState<boolean>(false);

  const handleVisibleChange = (
    field: "oldPassword" | "newPassword" | "confirmNewPassword",
  ) => {
    switch (field) {
      case "oldPassword":
        setVisibleOldPassword(!visibleOldPassword);
        break;

      case "newPassword":
        setVisibleNewPassword(!visibleNewPassword);
        break;

      case "confirmNewPassword":
        setVisibleNewPasswordConfirm(!visibleNewPasswordConfirm);
        break;

      default:
        break;
    }
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "oldPassword":
        setOldPassword(e.target.value);
        break;

      case "newPassword":
        setNewPassword(e.target.value);
        break;

      case "confirmNewPassword":
        setConfirmNewPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleUpdatePassword = async () => {
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      setError("All fields are required");
      return;
    }

    if (oldPassword === newPassword) {
      setError("New password must be different from old password");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("New password and confirm password do not match");
      return;
    }

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
          },
        },
      );

      alert("Password updated successfully!");

      setOldPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update password");
    }
  };

  return {
    visibleOldPassword,
    visibleNewPassword,
    visibleNewPasswordConfirm,
    oldPassword,
    newPassword,
    confirmNewPassword,
    error,
    handleDataChange,
    handleUpdatePassword,
    handleVisibleChange,
  };
};

export default usePassword;
