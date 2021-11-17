import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

//Модель редактируемого на форме произвольного файла
export class FileEditModel {
    //ссылка для загрузки файла с сервера
    public url: string;
    //пояснение по требуемому размеру файла
    public fileSizeLabel: string;
    //пояснение по имени загруженного файла
    public fileNameLabel: string;

    private _file: File = undefined;
    get file(): File {
        return this._file;
    }
    set file(value: File) {
        this._file = value;
        if (value) {
            this.url = undefined;
        }
    }

    constructor(
        private fileSize: string,
        public name: string = null
    ) {
        this.fileSizeLabel = fileSize;
        this.fileNameLabel = name;
    }

    public reset() {
        this.file = null;
        this.fileNameLabel = null;
        this.url = '';
    }

    public get selectButtonLabel() {
        return this.url || this.file ? 'Загрузить другой' : 'Загрузить';
    }
}