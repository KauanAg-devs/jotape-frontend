import { AxiosResponse } from "axios";

export type SignFormProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: () => Promise<AxiosResponse<any, any> | void>;
  disabled?: boolean
}