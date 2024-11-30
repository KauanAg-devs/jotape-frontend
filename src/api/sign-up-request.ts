import { UserData } from "../@types/types";
import axios from "axios";

export default async function SignUpRequest(URL: string | undefined, { username, password }: UserData) {
  if (!URL) throw new Error("API URL is missing");

  try {
    const response = await axios.post(URL, { username, password }, {
      withCredentials: true 
    });
    
    return response;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Sign-up failed:", error.message);
    throw new Error(error.response?.data?.message || "An unexpected error occurred");
  }
}

export const checkAuthStatus = async (validateURL: string) => {
  try {
    const response = await axios.get(validateURL, {
      withCredentials: true 
    });
    return response.data; 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null; 
  }
};

export const logout = async (logoutURL: string) => {
  try {
    await axios.post(logoutURL, {}, {
      withCredentials: true 
    });
  } catch (error) {
    console.error("Logout failed:", error);
  }
};