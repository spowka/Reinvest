import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { CardComponent } from './card.component';

export class CardImagesValidator {
  constructor(
    private parent: CardComponent
  ) {
  }

  public imagesValidator(): ValidatorFn {
    return (group: FormGroup): ValidationErrors => {
      var printFiles = this.printFilesInvalid(),
        siteImages = this.siteImagesInvalid(),
        terminalImages = this.terminalImagesInvalid();

      var errors = null;
      if (printFiles)
        errors = { ...errors, printFiles };
      if (siteImages)
        errors = { ...errors, siteImages };
      if (terminalImages)
        errors = { ...errors, terminalImages };
      return errors;
    };
  }

  public printFilesInvalid(): boolean | null {
    if (this.parent.printFilesMode == "None" && this.fullValidation())
      return true;
    if (this.parent.printFilesMode == "ImageHoloLamination" &&
      (!this.parent.terminalPrintFrontImage.imageSrc || !this.parent.terminalPrintFrontHolo.imageSrc || !this.parent.terminalPrintFrontLamination.imageSrc ||
        !this.parent.terminalPrintBackImage.imageSrc || !this.parent.terminalPrintBackHolo.imageSrc || !this.parent.terminalPrintBackLamination.imageSrc))
      return true;
    if (this.parent.printFilesMode == "ImageLamination" &&
      (!this.parent.terminalPrintFrontImage.imageSrc || !this.parent.terminalPrintFrontLamination.imageSrc ||
        !this.parent.terminalPrintBackImage.imageSrc || !this.parent.terminalPrintBackLamination.imageSrc))
      return true;
    return null;
  }

  public siteImagesInvalid(): boolean | null {
    if (this.fullValidation() && (!this.parent.previewImage.imageSrc || !this.parent.frontImage.imageSrc || !this.parent.backImage.imageSrc))
      return true;
    return null;
  }

  public terminalImagesInvalid(): boolean | null {
    if (this.fullValidation() && (!this.parent.terminalPreviewImage.imageSrc || !this.parent.terminalFrontImage.imageSrc || !this.parent.terminalBackImage.imageSrc))
      return true;
    return null;
  }

  //если карта в статусе "Проверка" или "Доработка", то должны быть загружены все изображения
  fullValidation() {
    return this.f.status.value == 'Check' || this.f.status.value == 'Active';
  }

  public get f() { return this.parent.cardForm && this.parent.cardForm.controls; }
}