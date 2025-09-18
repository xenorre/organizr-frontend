import { toAppError } from "@/lib/utils/appError";
import { AppErrorType } from "@/lib/utils/appErrorCodes";

describe("toAppError", () => {
  it("maps 404 to NotFound", () => {
    const error = { response: { status: 404 } };
    expect(toAppError(error).type).toBe(AppErrorType.NotFound);
  });

  it("maps 401 to Unauthorized", () => {
    const error = { response: { status: 401 } };
    expect(toAppError(error).type).toBe(AppErrorType.Unauthorized);
  });

  it("maps backend error code WRONG_PROJECT to WrongProject", () => {
    const error = { response: { data: { code: "WRONG_PROJECT" } } };
    expect(toAppError(error).type).toBe(AppErrorType.WrongProject);
  });

  it("returns Unknown for unknown error", () => {
    expect(toAppError({} as any).type).toBe(AppErrorType.Unknown);
  });
});
