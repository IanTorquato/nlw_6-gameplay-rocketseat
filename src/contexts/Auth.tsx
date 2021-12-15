import * as AuthSession from 'expo-auth-session';
import React, { createContext, ReactNode, useContext, useState } from 'react';

import { CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from '@configs/discordAuth';
import { api } from '@services/api';

type User = {
  id: number;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
  status: 'online' | 'offline';
};

type AuthContextData = {
  user: User;
  signIn: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextData);

const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      console.log(await AuthSession.startAsync({ authUrl }));
    } catch {
      throw new Error('Não foi possível autenticar!');
    }

    setLoading(false);
  }

  return <AuthContext.Provider value={{ user, signIn }}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
