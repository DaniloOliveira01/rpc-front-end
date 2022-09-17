import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ITypeData } from "../../@types";
import { CardsProgrammes } from "../CardsProgrammes";

export const HomeLayout = () => {
  const [data, setData] = useState<any>([]);
  const [url, setUrl] = useState("")

  useEffect(() => {
    const [mes, dia, ano] = new Date().toLocaleDateString("en-US").split('/')
    const dataFormatted = `${ano}-${mes}-${dia}`
    axios
    .get(`http://localhost:3030/getRPCProgramme/${url ? url : dataFormatted}`)
    .then((response) => setData(response.data))
    .catch((err) => {
      console.error(err);
    });
    setUrl(dataFormatted)
  }, [url])

  useEffect(() => {
    console.log(url)
  }, [url])

  return (
    <main className="w-[100%] flex flex-col justify-center items-center">
      <header className="bg-[#FAFAFA] px-6 w-[100%] flex flex-col justify-center items-center">
        <div className="relative w-[200px] h-[95px]">
          <Image 
            src={"/img/layout/logo-rpc.webp"} 
            alt={"Logo with description RPC."} 
            objectFit={"contain"} 
            layout={"fill"}
            priority={true}
          />
        </div>
      </header>
      <CardsProgrammes setUrl={setUrl} data={data.data} programmeParse={data.programmeParse} />
    </main>
  );
}