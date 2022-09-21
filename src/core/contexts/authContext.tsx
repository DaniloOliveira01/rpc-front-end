import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

type AuthContextType = {
  user: boolean
  setUser: Dispatch<SetStateAction<boolean>>
}

type AuthProviderProps = {
  children: ReactNode
};
export const AuthContext = createContext({} as AuthContextType)


export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<boolean>(false)

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
