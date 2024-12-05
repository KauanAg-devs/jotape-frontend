import { FormContainerProps } from "../../../@types/form-container.types";

export default function FormContainer({ children }: FormContainerProps){
    return (
        <form className="flex justify-center items-center flex-col gap-12">
          { children }
        </form>
    )
}