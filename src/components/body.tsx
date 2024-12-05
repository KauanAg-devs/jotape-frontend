import { BodyProps } from "../@types/body.types";

export default function Body({ children }: BodyProps){
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
          { children }
        </div>
    )
}