interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-white hover:scale-[1.025] active:scale-100 transition-all duration-100 text-black font-bold py-2 px-4 rounded-full"
    >
      {children}
    </button>
  );
}
