import { CurrentUserSiteResponse } from '../user/user';

export const siteTokenName = 'auth-tkn';

export interface ResetPasswordModel {
    userId: string;
    password: string;
    code: string;
}

//Аргумент события "Обновление пользователя"
export interface UserChangedEventArgs {
    //токен старого (ранее авторизованного) пользователя. Заполняется только при смене пользователя
    oldToken: string;

    //старый пользователь
    oldValue: CurrentUserSiteResponse;

    //новый пользователь. Может быть равен старому
    newValue: CurrentUserSiteResponse;
}

export interface IsEmailFreeResponse {
    hasUser: boolean;
}