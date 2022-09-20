import { Dispatch, SetStateAction } from "react"
export interface ITypeData {
  isLive: boolean;
  programme: {
    title?: string;
    description?: string;
    time_start?: string;
    time_end?: string;
    URL_IMG?: string;
  }
}
export interface ITypeCards {
  data?: string;
  programmeParse: ITypeData[];
  setUrl: Dispatch<SetStateAction<string>>;
}