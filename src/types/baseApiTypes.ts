export type ApiError = {
  message: string
  status?: number
  details?: any
}

export type ApiResponse<T> = {
  data: T
  message: string
  isOk: boolean
}

