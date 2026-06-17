import type { AxiosRequestConfig } from "axios";
import type { IRequestBuilder } from "../interface";

const RequestBuilder = ({
  url,
  method,
  data,
}: IRequestBuilder): AxiosRequestConfig => {
  const token = localStorage.getItem("token");

  return {
    url: `http://localhost:3000${url}`,
    method,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export default RequestBuilder;
