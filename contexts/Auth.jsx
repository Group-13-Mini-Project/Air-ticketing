import * as SecureStore from "expo-secure-store";
import { createContext, useEffect, useState } from "react";

const AUTH_KEY = "auth-key";

const Context = createContext({});

const Provider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAuthData();
  }, []);

  const loadAuthData = async () => {
    try {
      const authDataSerialized = await SecureStore.getItemAsync(AUTH_KEY);
      if (authDataSerialized) {
        const _authData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const setLoginToken = async (token) => {
    const _authData = { token };
    setAuthData(_authData);
    await SecureStore.setItemAsync(AUTH_KEY, JSON.stringify(_authData));
  };

  const removeLoginToken = async () => {
    setAuthData(null);
    await SecureStore.deleteItemAsync(AUTH_KEY);
  };

  return (
    <Context.Provider
      value={{ authData, loading, setLoginToken, removeLoginToken }}
    >
      {children}
    </Context.Provider>
  );
};

export default {
  Context,
  Provider,
};
