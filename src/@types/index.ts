import { Dispatch, SetStateAction } from 'react'
export interface ICardsProps {
  isLive: boolean;
  programme: {
    title?: string;
    description?: string;
    time_start?: string;
    time_end?: string;
    URL_IMG?: string;
  }
}
export interface IFetchProps {
  data?: string;
  programmeParse: ICardsProps[];
  setUrl: Dispatch<SetStateAction<string>>;
}