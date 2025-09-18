import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { signInWithProvider } from "@/lib/auth-client";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import SocialProviderButton from "./SocialProviderButton";
import type { ReactNode } from "react";

type Provider = {
  name: string;
  icon: ReactNode;
};

export function SocialProviders() {
  const providers: Provider[] = [
    {
      name: "Google",
      icon: <FcGoogle className="w-5 h-5" />,
    },
    {
      name: "Github",
      icon: <FaGithub className="w-5 h-5" />,
    },
  ];

  const navigate = useNavigate();

  const handleSignIn = async (provider: string) => {
    const providerName = provider.toLowerCase();
    const response = await signInWithProvider(providerName);
    if (response.success) {
      navigate("/dashboard");
    } else {
      toast.error(response.error);
    }
  };

  return (
    <div className="grid gap-3">
      {providers.map(({ name, icon }, index) => (
        <SocialProviderButton
          key={index}
          icon={icon}
          handleFunction={() => handleSignIn(name)}
          providerName={name}
        />
      ))}
    </div>
  );
}
