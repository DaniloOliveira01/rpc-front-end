import { Dispatch, SetStateAction } from "react";
import { ITypeCards } from "../@types";
import { api } from "../services/api";

const useGet = () => {
  const getProgramme = async (url: string, setData: Dispatch<SetStateAction<ITypeCards | undefined>>) => {
    const [mes, dia, ano] = new Date().toLocaleDateString("en-US").split('/')
    const dataFormatted = `${ano}-${mes}-${dia}`
    await api
    .get(`api/v1/program/${url ? url : dataFormatted}`)
    .then((response) => setData(response.data))
    .catch((err) => {
      console.error(err);
    });
  }

  return {
    getProgramme,
  }
}

export default useGet;