import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import useGet from "../../core/hooks/useGet";
import { useRouter } from "next/router";

const SignUp: NextPage = () => {
  const { handleResetPassword } = useGet();
  const [email, setEmail] = useState<string>("")
  const router = useRouter()
  
  return (
    <main className="w-full h-[100vh] flex justify-center items-center">
      <section className="flex justify-center items-center">
        <form className="md:p-10 p-5 flex flex-col justify-center items-center gap-5 border-2 rounded-xl" 
        onSubmit={(e) => handleResetPassword(e, email)}>
          <div className="relative md:w-[200px] md:h-[160px] w-[150px] h-[95px]">
            <Image 
              src={"/img/layout/logo-rpc.webp"} 
              objectFit={"contain"} 
              layout={"fill"}
              priority={true}
            />
          </div>

          <input 
            className="input-global px-3" 
            placeholder="Type your email" 
            type="text" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
          />

          <button
          className="whitespace-nowrap bg-[#6495ED] p-2 text-xl font-semibold">
            Reset Password
          </button>

          <span
          onClick={() => router.push("/")}
          className="text-[17px] underline cursor-pointer hover:text-[#1E90FF]">
            Return to the login page.
          </span>
        </form>
      </section>
    </main>
  )
}

export default SignUp;