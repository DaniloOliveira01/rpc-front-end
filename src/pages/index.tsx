import { NextPage } from 'next'
import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../core/hooks/useAuth'
import useFunction from '../core/hooks/useFunction'
import Image from 'next/image'
import Head from 'next/head'

const Login: NextPage = () => {
  const { handleSignIn } = useFunction()
  const { setUser } = useAuth()

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>RPC - Login</title>
        <meta name='description' content='Welcome to RPC, please login.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className="w-full h-[100vh] flex justify-center items-center">
        <section className="flex justify-center items-center">
          <form className="md:p-10 p-5 flex flex-col justify-center items-center gap-5 border-2 rounded-xl" 
          onSubmit={(e) => handleSignIn(e, email, password, setUser)}>

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
              placeholder="Email" 
              type="text" 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
            />

            <input 
              className="input-global px-3" 
              placeholder="Password" 
              type="password" 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
            />

            <button 
            className="w-[150px] bg-[#6495ED] p-2 text-xl font-semibold">
              Entrar
            </button>

            <span
            onClick={() => router.push("/signup")}
            className="text-[17px] underline cursor-pointer hover:text-[#1E90FF]">
              Don't have an account? Register here
            </span>

            <span
            onClick={() => router.push("/resetpassword")}
            className="text-[17px] underline cursor-pointer hover:text-[#1E90FF]">
              Forgot your password? Click here
            </span>
          </form>
        </section>
      </main>
    </Fragment>
  )
}

export default Login;