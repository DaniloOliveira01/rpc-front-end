import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CardsProgrammes } from "../CardsProgrammes";

export const HomeLayout = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios
    .get(`http://localhost:3030/getRPCProgramme/2022-09-18`)
    .then((response) => setData(response.data))
    .catch((err) => {
      console.error(err);
    });
  }, [])

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
      <CardsProgrammes programmeParse={data.programmeParse} />
    </main>
  );
}