export type FormContainerProps = {
    children: React.ReactNode
}

export type BodyProps = {
    children: React.ReactNode
}

export type UserData = {
    username: string,
    password: string,
}

export type InputsFormProps = {
    setUserData: React.Dispatch<React.SetStateAction<UserData | null >>
}

import { AxiosResponse } from "axios";

export type SignFormProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: () => Promise<AxiosResponse<any, any> | void>;
  disabled?: boolean
}