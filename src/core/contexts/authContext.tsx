import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

export const AuthContext = createContext({} as AuthContextType) 

type AuthContextType = {
  user: boolean
  setUser: Dispatch<SetStateAction<boolean>>
}

type AuthProviderProps = {
  children: ReactNode
};

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