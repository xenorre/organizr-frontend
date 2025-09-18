import { AppErrorType } from "./appErrorCodes";

// Struktura błędu aplikacji
export interface AppError {
  type: AppErrorType;
  details?: any;
}

// Funkcja do mapowania błędów backendu na AppError
export function toAppError(error: unknown): AppError {
  // Przykład: rozpoznawanie po statusie lub kodzie
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as any).response === "object"
  ) {
    const response = (error as any).response;
    if ("status" in response) {
      switch (response.status) {
        case 401:
          return {
            type: AppErrorType.Unauthorized,
          };
        case 403:
          return {
            type: AppErrorType.Forbidden,
          };
        case 404:
          return {
            type: AppErrorType.NotFound,
          };
        case 422:
          return {
            type: AppErrorType.Validation,
          };
        case 500:
          return {
            type: AppErrorType.ServerError,
          };
      }
    }
    // Przykład: własny kod błędu z backendu
    if (
      "data" in response &&
      response.data &&
      typeof response.data.code === "string"
    ) {
      switch (response.data.code) {
        case "WRONG_PROJECT":
          return {
            type: AppErrorType.WrongProject,
          };
      }
    }
  }
  // Fallback
  return {
    type: AppErrorType.Unknown,
  };
}
