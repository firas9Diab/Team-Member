import axios from "axios";

const requestBuilder = async (method: string, url: string, data?: object) => {
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
