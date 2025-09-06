import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/reactQuery";
import { Toaster } from "react-hot-toast";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "btn--ghost border border-[#e6e9ef]",
        }}
      />
      {children}
    </QueryClientProvider>
  );
}

export default Providers;
