import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigation = useNavigate();

  const [password, setPassword] = useState<string>("");

  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  const [errormessage, seterrormessage] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: emailValue,
        password: password,
      });

      seterrormessage("Account created successfully");

      localStorage.setItem("token", response.data.accessToken);

      navigation("/");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        seterrormessage(error.response?.data?.message || "Signup failed");
      } else if (error instanceof Error) {
        seterrormessage(error.message);
      } else {
        seterrormessage("Signup failed");
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  
  const handleVisiblePasswordChange = () => {
    setVisiblePassword(!visiblePassword);
  };
  
  return {
    password,
    handlePasswordChange,
    errormessage,
    emailValue,
    handleEmailChange,
    handleSignIn,
    navigation,
    visiblePassword,
    handleVisiblePasswordChange,
  };
};

export default useLogin;
