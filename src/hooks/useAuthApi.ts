import { METHOD_TYPES } from "../constants/common/httpMethods";
import { LoginRequestDTO, LoginResponseDTO, RefreshTokenRequestDTO, RefreshTokenResponseDTO } from "../dtos/auth/dtos";
import ROUTE from "../routes/route";
import { ApiResponse } from "../types/baseApiTypes";
import useApi from "./useApi";

export const useAuthApi = () => {
  const { request } = useApi();

  const login = (payload: LoginRequestDTO) => {
    return request<LoginResponseDTO>({
      method: METHOD_TYPES.POST,
      url: ROUTE.AUTH_LOGIN,
      data: payload
    });
  };

  const logout = () => {
    return request<ApiResponse>({
      method: METHOD_TYPES.POST,
      url: ROUTE.AUTH_LOGOUT
    });
  };

  const validate = (accessToken: string) => {
    return request<ApiResponse>({
      method: METHOD_TYPES.POST,
      url: ROUTE.AUTH_VALIDATE,
      params: { token: accessToken }
    });
  };

  const refresh = (payload: RefreshTokenRequestDTO) => {
    return request<RefreshTokenResponseDTO>({
      method: METHOD_TYPES.POST,
      url: ROUTE.AUTH_REFRESH,
      data: payload
    });
  };

  return { login, logout, validate, refresh };
};
