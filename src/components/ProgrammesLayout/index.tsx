import { useEffect, useState } from 'react'
import { IFetchProps } from '../../@types'
import { CardsProgrammes } from '../CardsProgrammes'
import Image from 'next/image'
import useFunction from '../../core/hooks/useFunction'

export const ProgrammesLayout = () => {
  const [data, setData] = useState<IFetchProps>()
  const [url, setUrl] = useState<string>("")

  const { getProgramme } = useFunction()

  useEffect(() => {
    getProgramme(url, setData)
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

      {data?.programmeParse ? (
        <CardsProgrammes 
          setUrl={setUrl} 
          data={data?.data} 
          programmeParse={data?.programmeParse} 
        />
      ) : (
        <aside className="relative w-[200px] h-[120px]">
          <Image 
            src={"/img/loading.svg"} 
            layout={"fill"} 
            objectFit={"contain"} 
            priority={true} 
          />
        </aside>
      )}
    </main>
  );
}