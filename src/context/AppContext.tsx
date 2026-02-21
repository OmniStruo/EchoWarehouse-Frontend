import { createContext, ReactNode, useEffect, useState } from "react";
import { AppConfigDTO } from "../dtos/app/dtos";
import { useAppApi } from "../hooks/useAppApi";

export interface AppContextType {
  appConfig: AppConfigDTO | null;
  setAppConfig: (appConfig: AppConfigDTO | null) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { getBootstrapData } = useAppApi();
  const [appConfig, setAppConfig] = useState<AppConfigDTO | null>(null);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    await initData();
  };

  const initData = async () => {
    const response = await getBootstrapData();

    console.log("Bootstrap data response:", response);
    if (response.isOk) {
      setAppConfig(response.data);
    } else {
      console.error("Failed to fetch bootstrap data:", response.message);
    }
  }

  return (
    <AppContext.Provider
      value={{
        appConfig,
        setAppConfig,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
