import axios from "axios";
import type { IRequestBuilder } from "../../Interfaces";
const RequestBuilder = async ({
  url,
  method,
  data,
  params,
}: IRequestBuilder) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: `http://localhost:3000${url}`,
    method,
    data,
    params,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
export default RequestBuilder;
