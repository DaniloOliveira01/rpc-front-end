import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CardsProgrammes } from "../CardsProgrammes";

export const HomeLayout = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios
    .get(`http://localhost:3030/getRPCProgramme/2022-09-17`)
    .then((response) => setData(response.data))
    .catch((err) => {
      console.error(err);
    });
  }, [])

  const formateData = new Date().toLocaleDateString();

  return (
    <main className="flex flex-col justify-center items-center">
      <header className="w-[100%] flex flex-col gap-2 justify-center items-center">
        <div className="relative w-[200px] h-[95px]">
          <Image 
            src={"/img/layout/logo-rpc.webp"} 
            alt={"Logo with description RPC."} 
            objectFit={"contain"} 
            layout={"fill"}
            priority={true}
          />
        </div>
        <article className="flex flex-col justify-center items-center gap-2 mb-3">
            <span className="text-center text-[#fbfbfb] font-semibold text-[19px]">Date: {formateData}</span>
            <div className="flex gap-3">
              <button className="btn-global">Previous</button> 
              <button className="btn-global">Next</button>
            </div>
        </article>
      </header>

      <CardsProgrammes programmeParse={data.programmeParse} />
    </main>
  );
}