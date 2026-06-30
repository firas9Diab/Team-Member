import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RequestBuilder from "../../services/RequestBuilder";

const useSignUp = () => {
  const navigation = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setconfirmPassword] = useState<string>("");
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [visiblePasswordConfirm, setVisiblePasswordConfirm] =
    useState<boolean>(false);
  const [errorMessage, setErrorMssage] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [phoneValue, setphoneValue] = useState<string>("");
  
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setErrorMssage("Passwords do not match");
      return;
    }
    try {
      const response = await RequestBuilder({
        url: "/auth/signup",
        method: "POST",
        data: {
          fullName,
          email: emailValue,
          password,
          confirmPassword,
          phone: phoneValue,
        },
      });
      setErrorMssage("Account created successfully");
      const token = response.data?.accessToken;
      if (token) {
        localStorage.setItem("token", token);
      }
      navigation("/Sellers/Login");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErrorMssage(error.response?.data?.errors[0] || "Signup failed");
      } else if (error instanceof Error) {
        setErrorMssage(error.message);
      } else {
        setErrorMssage("Signup failed");
      }
    }
  };
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setconfirmPassword(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setphoneValue(e.target.value);
  };
  const handleVisiblePasswordChange = () => {
    setVisiblePassword(!visiblePassword);
  };
  const handleVisiblePasswordConfirmChange = () => {
    setVisiblePasswordConfirm(!visiblePasswordConfirm);
  };
  return {
    password,
    handlePasswordChange,
    confirmPassword,
    handleConfirmPasswordChange,
    visiblePassword,
    handleVisiblePasswordChange,
    visiblePasswordConfirm,
    handleVisiblePasswordConfirmChange,
    errorMessage,
    setErrorMssage,
    fullName,
    handleFullNameChange,
    emailValue,
    handleEmailChange,
    phoneValue,
    handlePhoneChange,
    handleSignup,
    navigation,
  };
};
export default useSignUp;
