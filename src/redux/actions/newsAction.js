import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API, API_KEY } from "../../constants/constants";

export const getNews = createAsyncThunk(
  "getNews",
  async ({ endpoint, params }) => {
    try {
      const url =
        endpoint === "everything"
          ? `${API.BASE_URL}/everything`
          : `${API.BASE_URL}/top-headlines`;
      console.log(url, params);
      const { data } = await axios.get(url, {
        params: params,
        headers: {
          Authorization: `Bearer ${API_KEY}`, // Send the API key in headers
        },
      });
      return data;
    } catch (error) {
      console.log(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  }
);
