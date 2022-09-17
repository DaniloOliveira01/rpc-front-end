import Image from "next/image";
import { ITypeCards } from "../../@types";
import { TbAntennaBars5 } from "react-icons/tb"

export const CardsProgrammes = ({ programmeParse }: ITypeCards) => {
  const hourAtual = new Date().toLocaleTimeString()

  return (
    <section className="flex flex-col gap-5">
      <article className="flex px-5 flex-col gap-3 mb-3">
        {programmeParse?.map((item, i) => (
          <aside className="box-shadow-global max-w-[800px] border-2 border-[#131416] p-3 bg-[#D3D3D3] rounded-xl" key={i}>
            <div className="flex">
              <div className="relative w-[100px] h-[95px]">
                <Image 
                  src={item.URL_IMG === null || undefined 
                    ? "/img/layout/logo-rpc.webp" 
                    : item.URL_IMG} 
                  layout={"fill"} 
                  objectFit={"contain"} 
                />
              </div>
              {hourAtual.slice(0, 2) === item.time_start?.slice(0, 2) || 
              item.time_end?.slice(0, 2) 
              ? (
                <span className="flex justify-center items-center text-[20px] text-red-600 font-bold">
                  <TbAntennaBars5 /> Ao vivo
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="flex rounded-xl border-[#4F4F4F] border-[5px] p-3 flex-col gap-3">
              <h4 className="text-[28px] font-bold">
                {item.title === null || undefined 
                ? "Em breve!" 
                : item.title}
              </h4>
              <span className="text-[17px]"> 
              <span className="font-bold">Sinopse:</span> <br /> 
                {item.title === null || undefined 
                ? "" 
                : item.description?.length > 300 
                ? item.description?.slice(0, 300) + "..." 
                : item.description}
              </span>
              <span>
                <span className="font-bold">Horário:</span>{" "}
                  {item.time_start} e {item.time_end}
              </span>
            </div>
          </aside>
        ))}
      </article>
    </section>
  );
}