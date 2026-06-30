import axios from "axios";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import RequestBuilder from "../../services/RequestBuilder";

const useLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [errormessage, seterrormessage] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  
  const handleSignIn = async () => {
    try {
      seterrormessage("");
      const response = await RequestBuilder({
        url: "/auth/login",
        method: "POST",
        data: {
          email: emailValue,
          password,
        },
      });
      const token = response.data.accessToken;
      const userId = response.data.user.id;
      if (!token) {
        seterrormessage("Token not found in response");
        return;
      }
      if (!userId) {
        seterrormessage("User id not found in response");
        return;
      }
      localStorage.setItem("token", token);
      localStorage.setItem("userId", String(userId));
      navigate("/");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        seterrormessage(error.response?.data?.message || "Login failed");
      } else if (error instanceof Error) {
        seterrormessage(error.message);
      } else {
        seterrormessage("Login failed");
      }
    }
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleVisiblePasswordChange = () => {
    setVisiblePassword((prev) => !prev);
  };
  return {
    password,
    handlePasswordChange,
    errormessage,
    emailValue,
    handleEmailChange,
    handleSignIn,
    navigate,
    visiblePassword,
    handleVisiblePasswordChange,
  };
};
export default useLogin;
