import { UserData } from "../@types/types";
import axios from "axios";

export default async function SignUpRequest(URL: string | undefined, { username, password }: UserData) {    
    if(!URL) throw new Error("API URL is missing");
    if(!username) throw new Error("username is missing");
    if(!password) throw new Error("password is missing");

    try {
        const response = await axios.post(URL, { username, password });
        return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("Sign-up failed:", error.message);
        throw new Error(error.response?.data?.message || "An unexpected error occurred");
      }
}