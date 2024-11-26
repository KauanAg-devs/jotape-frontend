import { SignFormProps } from "../../@types/types";


export default function SignForm({ onclick }: SignFormProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <input
        type="button"
        value="Cadastrar"
        onClick={onclick}
        className="font-inria-sans text-xl text-[#373737] rounded-lg h-[54px] bg-[#255A7A] w-44 cursor-pointer"
      />
      <h2 className="text-white font-inria-sans text-md">Avançar como recrutador</h2>
    </div>
  );
}
