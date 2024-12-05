import React from "react"; 

type InputsFormProps = {
  username: string 
  password: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  signUpAttempt: boolean
}

export default function InputsForm({ username, password, setUsername, setPassword, signUpAttempt }: InputsFormProps) {

 
  return (
    <div className="flex flex-col space-y-6 w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="
            w-full 
            px-4 
            py-3 
            text-gray-800 
            bg-white 
            border 
            border-gray-300 
            rounded-lg 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:border-transparent 
            transition-all 
            duration-300 
            text-base
            placeholder-gray-500
            shadow-sm
            hover:border-blue-300
          "
        />
        {!signUpAttempt && !username && (
          <p className="text-red-500 text-sm mt-1 pl-1">Digite o seu nome</p>
        )}
      </div>
      <div className="relative">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="
            w-full 
            px-4 
            py-3 
            text-gray-800 
            bg-white 
            border 
            border-gray-300 
            rounded-lg 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:border-transparent 
            transition-all 
            duration-300 
            text-base
            placeholder-gray-500
            shadow-sm
            hover:border-blue-300
          "
        />
        {!signUpAttempt && !password && (
          <p className="text-red-500 text-sm mt-1 pl-1">Digite a sua senha</p>
        )}
      </div>
    </div>
  );
}