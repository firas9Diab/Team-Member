import axios from "axios";
import type { IRequestBuilder } from "../../interface/interface";

const requestBuilder = async ({ url, method, data }: IRequestBuilder) => {
  const token = localStorage.getItem("token");

  const response = await axios({
    method,
    url,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export default requestBuilder;
