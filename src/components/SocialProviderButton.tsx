import type { ReactNode } from "react";

type SocialProviderButtonProps = {
  handleFunction: () => void;
  providerName: string;
  icon: ReactNode;
};

function SocialProviderButton({
  handleFunction,
  providerName,
  icon,
}: SocialProviderButtonProps) {
  return (
    <button
      type="button"
      onClick={handleFunction}
      className="btn btn--ghost flex items-center justify-center gap-3 w-full"
      aria-label={`Sign in with ${providerName}`}
    >
      {icon}
      <span>{providerName}</span>
    </button>
  );
}

export default SocialProviderButton;
