import { useLoadingContext } from "../../hooks/useLoadingContext";
import AppSpinner from "./AppSpinner";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showLoading?: boolean;
}

const AppButton = ({ children, showLoading, ...props }: AppButtonProps) => {
  const loader = useLoadingContext();

  return (
    <button
      {...props}
      disabled={props.disabled || loader.loading}
      className={`w-full h-11 bg-primary text-primary-foreground rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow mt-2 ${props.className}`}
    >
      {showLoading && loader.loading ? <AppSpinner size="sm" /> : children}
    </button>
  );
};

export default AppButton;
