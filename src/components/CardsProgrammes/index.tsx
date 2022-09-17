import Image from "next/image";
import { ITypeCards } from "../../@types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Sinopse } from "./SinopseDropDown";

export const CardsProgrammes = ({ programmeParse }: ITypeCards) => {
  const hourAtual = new Date().toLocaleTimeString()
  const dateAtual = new Date().toLocaleDateString()

  return (
    <section className="flex flex-col justify-center items-center font-bold p-5">
      <h1 className="text-[#fbfbfb] text-center md:text-4xl text-2xl mb-5">Confira nossa programação completa:</h1>

      <aside className="flex justify-center items-center gap-3 mb-5">
        <AiOutlineArrowLeft size={40} color="#fbfbfb" />
          <span className="text-[#fbfbfb] text-xl">{dateAtual}</span>
        <AiOutlineArrowRight size={40} color="#fbfbfb" />
      </aside>

      <article className="flex flex-col md:justify-start justify-center items-center gap-3 mb-3">
        {programmeParse?.map((item, i) => (
          <article className="md:w-[1000px] w-[300px] bg-[#D9D9D9] flex flex-col" key={i}>
            <aside className="flex md:flex-row flex-col md:justify-between items-center px-2">
              <div className="flex gap-3 items-center">
                <div className="relative w-[100px] h-[95px]">
                  <Image 
                    src={item.URL_IMG === null || undefined 
                    ? "/img/layout/logo-rpc.webp" 
                    : item.URL_IMG} 
                    layout={"fill"} 
                    objectFit={"contain"} 
                  />
                </div>
                <h2 className="text-2xl font-semibold text-[#5C5B5B] text-center">
                  {item.title === null || undefined 
                  ? "Em breve..." 
                  : item.title}
                </h2>
              </div>

              <article>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-sm text-[#4B4B4B]">Horário</span>
                  <div className="bg-[#4E72A8] w-[150px] flex justify-center items-center p-2 text-[#fbfbfb] font-semibold text-xl">
                    <span>{item.time_start} - {item.time_end}</span>
                  </div>
                </div>
              </article>
            </aside>
            <Sinopse sinopse={item.description === null || undefined ? "Preparando o seu melhor programa." : item.description} />
          </article>
        ))}
      </article>
    </section>
  );
}