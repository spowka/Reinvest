export class PrinterModel {
    public id: string;
    public serialHex: string;
    public name: string;
    public status: string;
    public statusDate: string;
    public inProfileUrl: string;
    public outProfileUrl: string;
    public canDoTestPrint: boolean;
    public lifeTime: number;
    public remainingRibbon: number;
    public sublimate: number;
    public hologram: number;
}

export type TestPrintStatus = 'Waiting' | 'Printing' | 'Success' | 'Fail';

export class TestPrintStateModel {
	// идентификатор текущей задачи (если есть)
    public taskId: string;
    // статус текущей задачи (если есть)
    public status: TestPrintStatus | undefined;
	// ошибка текущей задачи (если есть)
    public error: string;
	// возможен ли запуск тестовой задачи
    public canStartTestPrint: boolean;
}