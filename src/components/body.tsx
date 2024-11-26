import { BodyProps } from "../@types/types";

export default function Body({ children }: BodyProps){
    return (
        <div className="h-screen w-full custom-gradient flex flex-col justify-center items-center gap-4">
          { children }
        </div>
    )
}