import React, { useState, memo } from "react";
import AppIcon from "./AppIcon";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import AppValidator from "./AppValidator";
import { ErrorDetailDto } from "../../dtos/validation/dtos";

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean;
  validator?: ErrorDetailDto[];
  isLoading?: boolean;
  validationPropName?: string;
}

const AppInputComponent = ({
  isPassword,
  validator,
  validationPropName,
  isLoading,
  ...inputProps
}: AppInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const hasError =
    validator &&
    validator.length > 0 &&
    validator.some((error) => error.key === validationPropName);

  return (
    <>
      <div className="relative">
        <input
          {...inputProps}
          type={
            isPassword ? (showPassword ? "text" : "password") : inputProps.type
          }
          disabled={isLoading || inputProps.disabled}
          className={`w-full h-11 px-4 bg-input border ${hasError ? "border-red-500" : "border-border"} rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-150 ${isLoading ? "opacity-40" : ""} ${inputProps.className}`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-150 ${isLoading ? "opacity-40 cursor-not-allowed" : ""}`}
            disabled={isLoading || inputProps.disabled}
          >
            {showPassword ? (
              <AppIcon size={20} icon={IoMdEyeOff} />
            ) : (
              <AppIcon size={20} icon={IoMdEye} />
            )}
          </button>
        )}
      </div>

      {/* Always render — let AppValidator handle show/hide with CSS */}
      <AppValidator propName={validationPropName} validator={validator} />
    </>
  );
};

const AppInput = memo(AppInputComponent) as typeof AppInputComponent;

export default AppInput;