import { PrintFilesMode } from '../cards/card.model';

export interface ServiceSettingsResponse {
    ordersNotifyEmail: string;
    pickpointOfficeAddress: string;
    pickpointOfficeAddressComment: string;

    proportionalPriceFactor: number;
    exponentialPriceFactor: number;

    cartClearInterval: number;
    orderPaymentInterval: number;
    timeAfterPrintingToInactionMode: number;
}

export interface TestPrintSettingsResponse {
    printFilesMode: PrintFilesMode;
    printFrontImage: string;
    printFrontHolo: string;
    printFrontLamination: string;
    printBackImage: string;
    printBackHolo: string;
    printBackLamination: string;
}

export type ConfigParamName = 'ReCaptchaSiteKey';

export interface ParamResponse {
    value: string;
}

export interface SocialSettingsResponse {
    vkAppId: string;
    fbAppId: string;
    googleAppId: string;
    okAppId: string;
}