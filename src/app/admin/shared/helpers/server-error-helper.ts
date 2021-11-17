export class ServerErrorHelper {
    public static getError(error: any, defaultMsg: string = null): string {
        let errorModel = error.error;
        switch (errorModel && errorModel.code) {
            // case 'PasswordMatch': return 'Введенные пароли не совпадают.';
        }

        return defaultMsg;
    }

    public static getErrorModel(error: any) {
        const errorModel = error && error.error;
        if (errorModel.code) {
            return errorModel;
        } else {
            return null;
        }
    }

    public static processErrorModel(error: any, code: string, callback: (errorModel: any) => void): boolean {
        const errorModel = error && error.error;
        if (errorModel && errorModel.code == code) {
            callback(errorModel);
            return true;
        } else {
            return false;
        }
    }
}
