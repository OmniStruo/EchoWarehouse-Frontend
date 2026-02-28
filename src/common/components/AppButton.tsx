const AppButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`w-full h-11 bg-primary text-primary-foreground rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow mt-2 ${props.className}`}
    >
      {children}
    </button>
  );
};

export default AppButton;
