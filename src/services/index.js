import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/v1/",
  timeout: 20000,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["ngrok-skip-browser-warning"] = "69420";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(
      error.response?.data?.message || "Something went wrong. Please try again."
    );
  }
);

export const apiHelper = async (
  method,
  endPoint,
  customHeaders = {},
  body = null,
  customConfig = {}
) => {
  try {
    const config = {
      method,
      url: endPoint,
      headers: {
        "Content-Type": "application/json",
        ...customHeaders,
      },
      ...(method !== "GET" && body != null ? { data: body } : {}),
      ...customConfig,
    };

    const response = await instance.request(config);
    return {
      error: null,
      response,
    };
  } catch (error) {
    return {
      error,
      response: null,
    };
  }
};