import { ValidationErrorDTO } from "../../dtos/validation/dtos";

interface AppValidatorProps {
  validator?: ValidationErrorDTO;
  propName?: string;
}

const AppValidator: React.FC<AppValidatorProps> = ({ validator, propName }) => {
  return (
    <div>
      {validator &&
        Object.keys(validator.errors).map((key) => {
          if (propName && key.toLowerCase() !== propName.toLowerCase()) return null;
          return (
            <p key={key} className="text-red-500 text-sm mt-1">
              {validator.errors[key]}
            </p>
          );
        })}
    </div>
  );
};

export default AppValidator;
