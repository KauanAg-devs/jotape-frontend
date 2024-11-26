import { useState, useEffect } from "react";
import { InputsFormProps } from "../../@types/types";

export default function InputsForm({ setUserData }: InputsFormProps) {
  const [username, setUsername] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");

  useEffect(() => {
    setUserData({
      username: username || "",
      password: password || "",
    });
  }, [username, password, setUserData]);

  return (
    <>
      <input
        type="text"
        value={username || ""}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="pl-5 font-inria-sans text-xl placeholder-[#373737] w-96 h-[77px] bg-[#535353] rounded-[10px]"
      />
      <input
        type="password"
        value={password || ""}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="pl-5 font-inria-sans text-xl placeholder-[#373737] w-96 h-[77px] bg-[#535353] rounded-[10px]"
      />
    </>
  );
}
