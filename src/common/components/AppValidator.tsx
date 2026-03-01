import { ErrorDetailDto } from "../../dtos/validation/dtos";
import { memo } from "react";

interface AppValidatorProps {
  validator?: ErrorDetailDto[];
  propName?: string;
}

const AppValidator: React.FC<AppValidatorProps> = ({ validator, propName }) => {
  const filteredErrors = validator?.filter(
    (error) => !propName || error.key === propName,
  );

  const hasErrors = filteredErrors && filteredErrors.length > 0;

  return (
    <div
      className={`overflow-hidden transition-[max-height,opacity] duration-200 ease-in-out ${
        hasErrors ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {filteredErrors?.map((error) => (
        <p key={error.key} className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      ))}
    </div>
  );
};

const areEqual = (
  prev: AppValidatorProps,
  next: AppValidatorProps
): boolean => {
  if (prev.propName !== next.propName) return false;
  const prevLen = prev.validator?.length ?? 0;
  const nextLen = next.validator?.length ?? 0;
  if (prevLen !== nextLen) return false;
  for (let i = 0; i < prevLen; i++) {
    const prevErr = prev.validator![i];
    const nextErr = next.validator![i];
    if (prevErr.key !== nextErr.key || prevErr.message !== nextErr.message) {
      return false;
    }
  }
  return true;
};

export default memo(AppValidator, areEqual);