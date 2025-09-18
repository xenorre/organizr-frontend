// Funkcja pobierająca komunikat błędu na podstawie AppErrorType i i18n
import { AppErrorType } from "./appErrorCodes";

/**
 * Zwraca klucz lokalizacji na podstawie typu błędu, np. "error.NotFound"
 */
export function getAppErrorMessageKey(type: AppErrorType): string {
  return `error.${type}`;
}

// --- PRZYKŁADY UŻYCIA ---

// 1. Wywołanie w globalnym error handlerze lub komponencie:
// import { toAppError } from "./appError";
// import { getAppErrorMessageKey } from "./errorHandler";
// import { useTranslation } from "react-i18next";
//
// const { t } = useTranslation();
//
// try {
//   ...
// } catch (err) {
//   const appError = toAppError(err);
//   const message = t(getAppErrorMessageKey(appError.type));
//   // np. toast.error(message) lub setError(message)
// }

// 2. Przykładowy plik tłumaczeń (pl.json):
// {
//   "error": {
//     "NotFound": "Nie znaleziono zasobu.",
//     "WrongProject": "Wybrano niewłaściwy projekt.",
//     "Unauthorized": "Nieautoryzowany dostęp.",
//     "Forbidden": "Brak uprawnień.",
//     "ServerError": "Błąd serwera. Spróbuj ponownie później.",
//     "Validation": "Błąd walidacji danych.",
//     "Network": "Błąd sieci. Sprawdź połączenie.",
//     "Unknown": "Wystąpił nieoczekiwany błąd."
//   }
// }

// 3. Dodanie nowego błędu:
// - Dodaj nowy typ do AppErrorType
// - Dodaj klucz do pliku tłumaczeń (np. "error.MyNewError": "Opis...")
// - NIE musisz zmieniać logiki errorHandler ani toAppError
