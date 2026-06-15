import axios from "axios";
import type { RequestBuilderProps } from "../../interface/interface";

const requestBuilder = async ({ url, method, data }: RequestBuilderProps) => {
  const token = localStorage.getItem("token");

  return axios({
    method,
    url,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export default requestBuilder;
