interface AuthFormOptionsProps {
  register: any;
}

export default function AuthFormOptions({ register }: AuthFormOptionsProps) {
  return (
    <div className="flex items-center justify-between text-sm">
      <label className="flex items-center gap-2 text-[var(--text-secondary)]">
        <input type="checkbox" className="w-4 h-4" {...register("remember")} />
        Remember me
      </label>
      <a className="text-brand-500 hover:underline" href="#">
        Forgot?
      </a>
    </div>
  );
}
