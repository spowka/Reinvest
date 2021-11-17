import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

//Модель редактируемого на форме изображения
export class ImageEditModel {
    public url: string;
    public imageSizeLabel: string;

    private _file: File = undefined;
    private _fileSrc: SafeUrl;
    get file(): File {
        return this._file;
    }
    set file(value: File) {
        this._file = value;
        this._fileSrc = this.blobToImgSrc(value);
    }

    public get imageSrc() {
        return this._fileSrc || this.url;
    }

    public get selectButtonLabel() {
        return this.imageSrc ? 'Загрузить другой' : 'Загрузить';
    }

    constructor(
        private sanitizer: DomSanitizer,
        private imageSize: string
    ) {
        this.imageSizeLabel = imageSize;
    }

    //удаление файла с сервера
    public reset() {
        this.file = null;
        this.url = '';
    }

    //возврат файла к исходному (при загрузке его состояние не изменится)
    public set(url: string) {
        this.file = undefined;
        this.url = url;
    }

    private blobToImgSrc(file: File): SafeUrl {
        if (!file)
            return null;
        return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
    }
}