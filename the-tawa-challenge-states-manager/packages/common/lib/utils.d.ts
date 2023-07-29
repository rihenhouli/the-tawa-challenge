type UrlConfigBody = {
    CORE_BASE_URL?: string;
    DEBUG_MODE?: boolean;
    NOTIFICATIONS_BASE_URL?: string;
};
declare class UrlsConfigs {
    values: null | UrlConfigBody;
    setURls(config: UrlConfigBody): void;
    getURLs(): UrlConfigBody | null;
}
export declare const TTCS_URL = "http://localhost:3030/";
export type technicalErrorMessageType = {
    statusCode: number;
    message: string;
};
export declare const LogRequestResponse: (response: any, urlsConfig: UrlsConfigs) => void;
export declare const LogError: (response: any, urlsConfig: UrlsConfigs) => void;
export declare const buildTechnicalErrorMessage: (e: any | null | undefined) => technicalErrorMessageType;
export {};
