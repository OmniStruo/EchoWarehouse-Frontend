import React, { useState } from "react";
import AppIcon from "./AppIcon";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean;
}

const AppInput: React.FC<AppInputProps> = ({ isPassword, ...inputProps }: AppInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        {...inputProps}
        type={isPassword ? (showPassword ? "text" : "password") : inputProps.type}
        className={`w-full h-11 px-4 bg-input border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all ${inputProps.className}`}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {showPassword ? <AppIcon size={20} icon={IoMdEyeOff} /> : <AppIcon size={20} icon={IoMdEye} />}
        </button>
      )}
    </div>
  );
};

export default AppInput;
