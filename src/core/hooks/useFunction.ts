import { 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { useRouter } from "next/router";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { IFetchProps } from "../../@types";
import { api } from "../services/api";
import { auth } from "../services/firebase/firebase";
import { toast } from "react-toastify"

const useFunction = () => {
  const router = useRouter();

  const getProgramme = async (url: string, setData: Dispatch<SetStateAction<IFetchProps | undefined>>) => {
    const [mes, dia, ano] = new Date().toLocaleDateString("en-US").split('/')
    const dataFormatted = `${ano}-${mes}-${dia}`
    await api
    .get(`api/v1/program/${url ? url : dataFormatted}`)
    .then((response) => setData(response.data))
    .catch((err) => {
      console.error(err);
    });
  }

  function handleCreateAccount (e: FormEvent<HTMLFormElement>, email: string, password: string) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      toast.success("Obrigado por criar uma conta conosco!")
    }).catch(() => {
      toast.error("Verifique se sua senha possui no minímo 6 caracters ou se o seu email é valido!")
    })
  }

  function handleSignIn (
    e: FormEvent<HTMLFormElement>, 
    email: string, 
    password: string, 
    setAcessToken: Dispatch<SetStateAction<boolean>>
  ) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(() => {
      setAcessToken(true)
      toast.success("Sucesso, seja bem-vindo(a)!")
      return router.push("/programmes")
    }).catch(() => {
      toast.error("Email ou senha incorreto!")
    })
  }

  function handleResetPassword (e: FormEvent<HTMLFormElement>, email: string) {
    e.preventDefault();
    sendPasswordResetEmail(auth, email).then(() => {
      toast.success("Verifique sua caixa de email.")
    }).catch(() => {
      toast.error("Falha ao redefinir sua senha.")
    })
  }

  return {
    getProgramme,
    handleCreateAccount,
    handleSignIn,
    handleResetPassword,
  }
}

export default useFunction;