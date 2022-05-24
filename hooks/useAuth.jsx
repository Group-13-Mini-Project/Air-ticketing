import { useContext } from "react";
import { Auth } from "../contexts";

const useAuth = () => {
  const context = useContext(Auth.Context);

  if (!context) {
    throw new Error("useAuth must be called within an Auth.Provider");
  }

  return context;
};

export default useAuth;
