import axios, { type Method } from "axios";

const API_URL = "http://localhost:3000";

export async function apiRequest<T>(
  method: Method,
  url: string,
  body?: unknown,
): Promise<T> {
  const token = localStorage.getItem("accessToken");

  const response = await axios({
    method,
    url: `${API_URL}${url}`,
    data: body,
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

  return response.data as T;
}
