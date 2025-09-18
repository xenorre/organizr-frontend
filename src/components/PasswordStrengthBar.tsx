import {
  barWidth,
  passwordStrength,
  strengthLabels,
} from "@/lib/passwordCheck";

interface PasswordStrengthBarProps {
  password: string;
}

export default function PasswordStrengthBar({
  password,
}: PasswordStrengthBarProps) {
  const strength = passwordStrength(password);
  return (
    <>
      <div className="flex items-center gap-3 mt-1">
        <div className="flex-1">
          <div className="relative w-full h-2.5 rounded-md bg-[#373737] overflow-hidden shadow-sm">
            <div
              className={`absolute left-0 top-0 h-full rounded-md transition-all duration-300 ${
                barWidth[strength - 1] || ""
              }`}
              style={{ background: "#e1e1e1" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center min-h-[1.5rem]">
        <span className="text-xs text-gray-600 h-full">Password strength</span>
        <span
          className={`px-2 py-0.5 rounded-md border text-xs font-medium shadow-sm select-none transition-colors duration-200 bg-white text-black`}
        >
          {strengthLabels[strength - 1] || "Weak"}
        </span>
      </div>
    </>
  );
}
