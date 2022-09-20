import { IFetchProps } from '../../@types'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { CgMediaLive } from 'react-icons/cg'
import { Sinopse } from './SinopseDropDown'
import Image from 'next/image'

export const CardsProgrammes = ({ data, setUrl, programmeParse }: IFetchProps) => {
  const dateNow = new Date(data ? data : "").toLocaleDateString('pt-BR')

  const handlePage = (nextPage: boolean) => {
    const newNow = new Date(data ? data : "")
    if (nextPage) newNow.setDate(newNow.getDate() + 1)
    if (!nextPage) newNow.setDate(newNow.getDate() - 1)

    const [mes, dia, ano] = newNow.toLocaleDateString("en-US").split('/')
    const dataFormatted = `${ano}-${mes}-${dia}`
    setUrl(dataFormatted)
  }

  return (
    <section className="flex flex-col justify-center items-center font-bold p-5">
      <h1 className="text-[#fbfbfb] text-center md:text-4xl text-2xl mb-5">
        Confira nossa programação completa:
      </h1>

      <aside className="flex justify-center items-center gap-3 mb-5">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          onClick={() => handlePage(false)} 
          size={40} 
          color="#fbfbfb" 
        />

          <span className="text-[#fbfbfb] text-xl">
            {dateNow}
          </span>
        
        <AiOutlineArrowRight
          className="cursor-pointer"
          onClick={() => handlePage(true)} 
          size={40} 
          color="#fbfbfb" 
        />
      </aside>

      <article className="flex flex-col md:justify-start justify-center items-center gap-3 mb-3">
        {programmeParse?.map((item, i) => (
          <article 
            className="md:w-[1000px] w-[300px] bg-[#D9D9D9] flex flex-col" 
            key={i}>
            <aside className="flex md:flex-row flex-col md:justify-between items-center px-2">
              <div className="flex gap-3 items-center">
                <div className="relative w-[100px] h-[95px]">
                  <Image 
                    src={item.programme.URL_IMG === null || undefined 
                    ? "/img/layout/logo-rpc.webp" 
                    : item.programme.URL_IMG} 
                    layout={"fill"} 
                    objectFit={"contain"}
                    priority
                  />
                </div>
                <h2 className="text-2xl font-semibold text-[#5C5B5B] text-center">
                  {item.programme.title === null || undefined 
                  ? "Coming soon!" 
                  : item.programme.title}
                </h2>
              </div>
          
              <article>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-sm text-[#4B4B4B]">Horário</span>
                    <div className="bg-[#4E72A8] w-[150px] flex justify-center items-center p-2 text-[#fbfbfb] font-semibold text-xl">
                      {item.isLive === true ? (
                        <span className="flex justify-center items-center gap-2 text-red-600"> 
                          <CgMediaLive className="animate-pulse" color="red" size={20} /> Ao vivo
                        </span>
                        ) : (
                          <span>{item.programme.time_start} - {item.programme.time_end}</span>
                        )}
                    </div>
                </div>
              </article>
            </aside>
            <Sinopse 
              sinopse={
                item.programme.description === null || undefined 
                ? "Preparando o seu melhor programa." 
                : item.programme.description
              } 
            />
          </article>
        ))}
      </article>
    </section>
  );
}