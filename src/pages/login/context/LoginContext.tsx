import { createContext, ReactNode } from "react";
import { useLoginApi } from "../hooks/useLoginApi";
import { LoginRequestDTO, LoginResponseDTO } from "../../../dtos/auth/dtos";
import authService from "../../../services/authService";

export interface LoginContextType {
  login: (username: string, password: string) => void;
}

export const LoginContext = createContext<LoginContextType | undefined>(
  undefined,
);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const loginApi = useLoginApi();

  const login = async (username: string, password: string) => {
    const payload = new LoginRequestDTO({ username, password });
    const response = await loginApi.login(payload);
console.log(response);
    if (response.isOk) {
      const data: LoginResponseDTO = response.data;
      if (data.refreshToken && data.accessToken) {
        // save tokens to local storage
        //authService.saveTokens(data.refreshToken, data.accessToken);
      }
    } else {
        // handle login error, e.g. show error message
    }
  };

  return (
    <LoginContext.Provider value={{ login }}>{children}</LoginContext.Provider>
  );
};
