import Link from "next/link";
import { SignFormProps } from "../../@types/types";


export default function SignForm({ onClick, disabled }: SignFormProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Link
        onClick={onClick}
        href={disabled ? '#' : '/home'}
        className="font-inria-sans flex justify-center items-center text-xl text-[#373737] rounded-lg h-[54px] bg-[#255A7A] w-44 cursor-pointer"   
      >
        Cadastrar
      </Link>
      <h2 className="text-white font-inria-sans text-md">Avançar como recrutador</h2>
    </div>
  );
}
