import { useCallback, useState } from "react";

import baseApiService, { RequestOptions } from "../services/baseApiService";
import type {
  ApiError,
  ApiResponse,
} from "../types/baseApiTypes";

export const useApi = () => {
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async <
      TResponse extends ApiResponse<TResponse | { error: string }> =
        ApiResponse<{ error: string }>,
      TBody = unknown,
      TParams = Record<string, unknown>,
    >(
      options: RequestOptions<TBody, TParams>,
    ): Promise<ApiResponse<TResponse | { error: string }>> => {
      setLoading(true);
      let response;
      try {
        response = await baseApiService.request<TResponse, TBody, TParams>(
          options,
        );
      } catch (err) {
        const apiError = err as ApiError;
        return {
          isOk: false,
          data: { error: apiError.details },
          message: apiError.message,
        };
      } finally {
        setLoading(false);
      }
      return response;
    },
    [],
  );

  return {
    request,
    loading,
  };
};

export default useApi;
