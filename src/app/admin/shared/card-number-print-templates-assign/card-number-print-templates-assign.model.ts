
export interface CardNumberPrintTemplateCatalogLevelBriefModel {
  id: string;
  name: string;
  activeCards: number;
  archiveCards: number;
  cardNumberPrintTemplateId: string;
  children: CardNumberPrintTemplateCatalogLevelBriefModel[];
}

export interface CardNumberPrintTemplateCatalogLevel {
  cardNumberPrintTemplateId: string;
  cards: CardNumberPrintTemplateCatalogCard[];
}

export interface CardNumberPrintTemplateCatalogCard {
  title: string;
  printCount: number;
  unlimited: boolean;
  soldCount: number;
}