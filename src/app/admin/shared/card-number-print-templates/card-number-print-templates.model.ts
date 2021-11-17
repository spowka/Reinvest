import { TextPageMenuModel } from "../catalog/catalog.model";

export interface CardNumberPrintTemplateBriefModel {
  id: string;
  createDate: string;
  name: string;
  assignedCards: number;
}

export enum NumberPlacement {
  HorizontalTop = "HorizontalTop",
  HorizontalBottom = "HorizontalBottom",
  VerticalLeft = "VerticalLeft",
  VerticalRight = "VerticalRight",
}

export interface CardNumberPrintTemplateModel {
  name: string;
  comment: string;

  placement: NumberPlacement;
  fontName: string;
  fontStyle: string;
  fontHexColor: string;

  createDate: string;
}

export interface FontInfo {
  name: string;
  styles: string[];
}