import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const navigation = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setconfirmPassword] = useState<string>("");
  const [visiblePassword, setvisiblePassword] = useState<boolean>(false);
  const [visiblepasswordConfirm, setvisiblepasswordConfirm] =
    useState<boolean>(false);
  const [errormessage, seterrormessage] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [phoneValue, setphoneValue] = useState<string>("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      seterrormessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/signup", {
        fullName,
        email: emailValue,
        password,
        confirmPassword,
        phone: phoneValue,
      });

      seterrormessage("Account created successfully");

      localStorage.setItem("token", response.data.accessToken);

      navigation("/Login");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        seterrormessage(error.response?.data?.errors[0] || "Signup failed");
      } else if (error instanceof Error) {
        seterrormessage(error.message);
      } else {
        seterrormessage("Signup failed");
      }
    }
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setconfirmPassword,
    visiblePassword,
    setvisiblePassword,
    visiblepasswordConfirm,
    setvisiblepasswordConfirm,
    errormessage,
    seterrormessage,
    fullName,
    setFullName,
    emailValue,
    setEmailValue,
    phoneValue,
    setphoneValue,
    handleSignup,
    navigation,
  };
};

export default useSignUp;
