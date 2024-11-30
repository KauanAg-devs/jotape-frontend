import { useState, useEffect } from "react";
import { InputsFormProps } from "../../@types/types";

export default function InputsForm({ setUserData }: InputsFormProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const validateFields = () => {
    const newErrors = {
      username: username.trim() ? "" : "Usuário não pode estar vazio",
      password: password.trim() ? "" : "Senha não pode estar vazia",
    };

    setErrors(newErrors);

    return !newErrors.username && !newErrors.password;
  };

  useEffect(() => {
    if (validateFields()) {
      setUserData({
        username,
        password,
      });
    }
  }, [username, password, setUserData]);

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="pl-5 outline-none font-inria-sans text-xl placeholder-[#373737] w-96 h-[77px] bg-[#535353] rounded-[10px]"
        />
        {errors.username && (
          <p className="text-red-500 mt-1">{errors.username}</p>
        )}
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="pl-5 outline-none font-inria-sans text-xl placeholder-[#373737] w-96 h-[77px] bg-[#535353] rounded-[10px]"
        />
        {errors.password && (
          <p className="text-red-500 mt-1">{errors.password}</p>
        )}
      </div>
    </div>
  );
}