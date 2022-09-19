import { createContext, ReactNode, useEffect, useState } from 'react'

export const AuthContext = createContext({} as AuthContextType) 

type User = {
  email: string;
  password: string;
}

type AuthContextType = {
  user: User | undefined;
}

// export function AuthContextProvider(children: ReactNode) {
//   return <AuthContext.Provider>{children}</AuthContext.Provider>
// }