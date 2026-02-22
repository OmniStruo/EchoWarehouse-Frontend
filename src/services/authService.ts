import localStorageService from "./localStorageService";

const authService =  {
    saveTokens : (refreshToken: string, accessToken: string) => {
        localStorageService.set("refreshToken", refreshToken);
        localStorageService.set("accessToken", accessToken);
    },
    getAccessToken : (): string | null => {
        return localStorageService.get("accessToken");
    },
    getRefreshToken : (): string | null => {
        return localStorageService.get("refreshToken");
    },
    removeTokens : (): void => {
        localStorageService.remove("accessToken");
        localStorageService.remove("refreshToken");
    },
    removeRefreshToken : (): void => {
        localStorageService.remove("refreshToken");
    },
    removeAccessToken : (): void => {
        localStorageService.remove("accessToken");
    }
}

export default authService;