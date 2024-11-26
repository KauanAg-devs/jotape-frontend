import { FormContainerProps } from "../../@types/types";

export default function FormContainer({ children }: FormContainerProps){
    return (
        <form className="flex justify-center items-center flex-col gap-12">
          { children }
        </form>
    )
}