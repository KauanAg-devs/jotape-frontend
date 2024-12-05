import Link from "next/link";
import { SignFormProps } from "../../../@types/sign-up-form.types";

export default function SignForm({ onClick, disabled }: SignFormProps) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 w-full max-w-md">
      <Link
        onClick={onClick}
        href={disabled ? '#' : '/'}
        className={`
          flex 
          justify-center 
          items-center 
          w-full 
          max-w-xs 
          px-6 
          py-3 
          text-white 
          bg-blue-600 
          rounded-lg 
          shadow-md 
          transition-all 
          duration-300 
          ${disabled 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          }
        `}
      >
        Cadastrar
      </Link>
      <h2 className="text-gray-700 text-base font-medium">
        Avançar como recrutador
      </h2>
    </div>
  );
}