import { ImSpinner2 } from "react-icons/im";

function LoadingSpinner({ type }: { type: string }) {
  if (type === "small") {
    return <ImSpinner2 className="animate-spin size-5" />;
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center mx-auto">
      <ImSpinner2 className="animate-spin size-24" />
    </div>
  );
}

export default LoadingSpinner;
