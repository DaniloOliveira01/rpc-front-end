import { useState } from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
interface ITypeSinopse {
  sinopse: string | undefined
}

export const Sinopse = ({ sinopse }: ITypeSinopse) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 0 },
  };

  return (
    <section
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-2 cursor-pointer"
    >
      <span className="flex px-2 items-center text-xl text-[#5C5B5B] hover:underline">
        Sinopse:
        {!isOpen ? (
          <MdKeyboardArrowDown 
            className="cursor-pointer" 
            size={20} 
            color="#4E72A8" 
          />
        ) : (
          <MdKeyboardArrowUp 
            className="cursor-pointer" 
            size={20} 
            color="#4E72A8" 
          />
        )}
      </span>
      <motion.div
          className={` ${
            isOpen
              ? "block w-[100%] md:w-[100%] py-3 px-4"
              : "hidden"
          }`}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <article className="border-b-2 p-2 bg-[#fbfbfb] border-[#4E72A8] flex flex-col justify-center items-center">
            <span
              className={`${
                isOpen
                  ? "block text-[#4B4B4B] text-[17px] mb-2 font-semibold text-justify"
                  : "hidden"
              }`}
            >
            {sinopse}
          </span>
        </article>
      </motion.div>
    </section>
  );
}