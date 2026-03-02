import { LoginProvider } from "./context/LoginContext";
import { useLoginContext } from "./hooks/useLoginContext";
import AppInput from "../../common/components/AppInput";
import AppButton from "../../common/components/AppButton";
import AppCard from "../../common/components/AppCard";
import AppIcon from "../../common/components/AppIcon";
import { BsArrowRight } from "react-icons/bs";
import { useCallback } from "react";
import RequiredStar from "../../common/components/RequiredStar";
import { LoginHeader } from "./components/LoginHeader";
import LoginBackground from "./components/LoginBackground";

export const Login = () => {
  const { login, loginInfo, onChangeLoginInfo, validator, loading } =
    useLoginContext();

  const handleUsernameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onChangeLoginInfo("username", e.target.value),
    [onChangeLoginInfo],
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onChangeLoginInfo("password", e.target.value),
    [onChangeLoginInfo],
  );

  const onSignInPress = useCallback(() => {
    login();
  }, [login]);

  //TODO: LoginHeaderben a nagy meretu svg-t le kell cserelni png-re, mert rerendernel belassitja a UI-t, mire betolt
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <LoginBackground />

      <div className="relative z-10 w-full max-w-md mx-4 animate-slide-up">
        <LoginHeader />

        <AppCard>
          <h2 className="text-lg font-semibold mb-1">
            {"UI_Login_WelcomeBack"}
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            {"UI_Login_SignInToContinue"}
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {"UI_Login_Username"}
                <RequiredStar />
              </label>
              <AppInput
                value={loginInfo?.username}
                validator={validator}
                isLoading={loading}
                validationPropName={"username"}
                onChange={handleUsernameChange}
                type="text"
                placeholder={"UI_Login_EnterYourUsername"}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {"UI_Login_Password"}
                <RequiredStar />
              </label>
              <AppInput
                value={loginInfo?.password}
                validator={validator}
                isLoading={loading}
                validationPropName={"password"}
                isPassword
                onChange={handlePasswordChange}
                placeholder={"UI_Login_EnterYourPassword"}
                className="pr-11"
              />
            </div>

            <AppButton isLoading={loading} onClick={onSignInPress}>
              {"UI_Login_SignIn"}
              <AppIcon icon={BsArrowRight} className="ml-2" />
            </AppButton>
          </div>
        </AppCard>

        <p className="text-center text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} EchoWarehouse - Smart Warehouse
          Management System
        </p>
      </div>
    </div>
  );
};

const LoginContextWrapper = () => (
  <LoginProvider>
    <Login />
  </LoginProvider>
);

export default LoginContextWrapper;
