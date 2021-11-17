import { Component, OnInit, SimpleChanges, ViewEncapsulation } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  AbstractControlOptions,
  FormControl,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService, SelectItem } from "primeng/api";
import { EditTextService } from "../../../../shared/edit-texts/edit-text.service";
import { MessageGroupEnum } from "../../../../shared/edit-texts/MessageGroupEnum";
import { FormService } from "../../../../shared/form/form-service";
import { DomSanitizer } from "@angular/platform-browser";
import { CardNumberPrintTemplatesService } from "src/app/admin/shared/card-number-print-templates/card-number-print-templates.service";
import {
  CardNumberPrintTemplateModel,
  FontInfo,
  NumberPlacement,
} from "src/app/admin/shared/card-number-print-templates/card-number-print-templates.model";
import { ImageEditModel } from "src/app/admin/shared/image/image-edit-model";

declare const dlgHelper: any;

@Component({
  selector: "app-card-number-print-template-card",
  templateUrl: "./card.component.html",
  styleUrls: [
    "../../../../shared-admin.scss",
    "./card.component.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CardNumberPrintTemplateCardComponent implements OnInit {
  form: FormGroup | null = null;
  isBusy: boolean;
  model: CardNumberPrintTemplateModel;
  modelId: string;

  fonts: SelectItem[] = [];
  fontStyles: SelectItem[] = [];

  file: ImageEditModel;

  private hasSaveAttempt: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private msg: MessageService,
    private formService: FormService,
    private cardNumberPrintTemplatesService: CardNumberPrintTemplatesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.file = new ImageEditModel(this.sanitizer, '720x1028');

    this.cardNumberPrintTemplatesService.getFonts().subscribe(
      response => {
        this.fonts = response.map(t => ({ value: t, label: t.name }));
        this.f.fontName.value = this.f.fontName.value || this.fonts[0].value;
        this.updateFontStyles();

        activateRoute.params.subscribe((params) => {
          if (params.id) {
            this.modelId = params.id;
            this.getPage(params.id);
          }
        });
      }
    );

    this._buildForm(<CardNumberPrintTemplateModel>{
      id: "",
      createDate: "",
      name: "",
      comment: "",
      placement: NumberPlacement.HorizontalBottom,
      fontHexColor: "",
      fontName: null,
      fontStyle: null,
    });
  }

  ngOnInit() { }

  ngOnDestroy() { }

  getPage(id: string) {
    this.cardNumberPrintTemplatesService.get(id).subscribe(
      (response) => {
        this._buildForm(response);
      },
      (error) => {
        this.formService.showServerErrors(this.msg, error);
      }
    );
  }

  private _buildForm(model: CardNumberPrintTemplateModel) {
    this.model = model;

    const placementHorizontal =
      model.placement == NumberPlacement.HorizontalBottom ||
      model.placement == NumberPlacement.HorizontalTop;
    const placementLeft = model.placement == NumberPlacement.VerticalLeft;
    const placementTop = model.placement == NumberPlacement.HorizontalTop;

    const font = this.fonts.find(t => t.value.name == model.fontName);
    const fontValue = font ? font.value : null;

    this.form = this.formBuilder.group({
      name: [model.name, Validators.required],
      comment: [model.comment],
      placementHorizontal: [placementHorizontal],
      placementLeft: [placementLeft],
      placementTop: [placementTop],
      fontName: [fontValue, Validators.required],
      fontStyle: [model.fontStyle, Validators.required],
      fontHexColor: [model.fontHexColor || "FFFFFF", Validators.required],
      createDate: [new Date(model.createDate)],
    });
    this.hasSaveAttempt = false;

    this.updateFontStyles();
    this.f.fontName.valueChanges.subscribe(() => this.updateFontStyles());
  }

  updateFontStyles() {
    const font = this.f.fontName.value as FontInfo;
    this.fontStyles = (font ? font.styles : []).map((t) => ({
      value: t,
      label: t,
    }));
  }

  save() {
    this.hasSaveAttempt = true;

    const f = this.f;

    if (this.form.invalid) {
      this.formService.showFormErrors(this.msg, this.form);
    } else {
      const formData = new FormData();
      formData.append("name", this.f.name.value || "");
      formData.append("comment", this.f.comment.value || "");
      formData.append("placement", getPlacement() || "");
      formData.append("fontName", this.f.fontName.value.name || "");
      formData.append("fontStyle", this.f.fontStyle.value || "");
      formData.append("fontHexColor", this.f.fontHexColor.value || "");

      this.cardNumberPrintTemplatesService
        .saveCardNumberPrintTemplate(this.modelId, formData)
        .subscribe(
          (response) => {
            this.msg.add({
              severity: "success",
              summary: "Успешно",
              detail: "Изменения сохранены",
            });
            if (this.modelId) {
              this.getPage(this.modelId);
            } else if (response.id) {
              this.router.navigate([
                `/admin/main/card-number-print-templates/list/${response.id}`,
              ]);
            }
          },
          (error) => {
            this.formService.showServerErrors(this.msg, error);
          }
        );
    }

    function getPlacement() {
      if (f.placementHorizontal.value) {
        return f.placementTop.value
          ? NumberPlacement.HorizontalTop
          : NumberPlacement.HorizontalBottom;
      } else {
        return f.placementLeft.value
          ? NumberPlacement.VerticalLeft
          : NumberPlacement.VerticalRight;
      }
    }
  }

  goBack() {
    this.router.navigate([`/admin/main/card-number-print-templates/list`]);
  }

  get f(): any {
    return this.form && this.form.controls;
  }

  hasError(control: any) {
    if (!control) return false;
    else
      return (
        control.invalid &&
        (control.dirty || control.touched || this.hasSaveAttempt)
      );
  }

  get header() {
    return (this.model && this.model.name) || "Новый шаблон";
  }

  getCardNumberClass() {
    if (this.f.placementHorizontal.value) {
      return this.f.placementTop.value
        ? 'card-number-top'
        : 'card-number-bottom'
    } else {
      return this.f.placementLeft.value
        ? 'card-number-left'
        : 'card-number-right'
    }
  }
}
