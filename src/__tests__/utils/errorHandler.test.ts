import { getAppErrorMessageKey } from "@/lib/utils/errorHandler";
import { AppErrorType } from "@/lib/utils/appErrorCodes";

describe("getAppErrorMessageKey", () => {
  it("generates correct key for NotFound", () => {
    expect(getAppErrorMessageKey(AppErrorType.NotFound)).toBe("error.NotFound");
  });
  it("generates correct key for Validation", () => {
    expect(getAppErrorMessageKey(AppErrorType.Validation)).toBe(
      "error.Validation"
    );
  });
});
