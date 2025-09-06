export const passwordStrength = (password: string): number => {
  return (
    (password.length >= 6 ? 1 : 0) +
    (/[A-Z]/.test(password) ? 1 : 0) +
    (/[0-9]/.test(password) ? 1 : 0) +
    (/[^A-Za-z0-9]/.test(password) ? 1 : 0)
  );
};

export const isPasswordValid = (password: string): boolean => {
  return (
    password.length >= 6 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
};

export const barWidth = ["w-1/4", "w-2/4", "w-3/4", "w-full"];
export const strengthLabels = ["Weak", "Weak", "Medium", "Strong"];
