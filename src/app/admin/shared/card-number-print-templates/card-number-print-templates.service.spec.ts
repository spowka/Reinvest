import { TestBed } from "@angular/core/testing";

import { CardNumberPrintTemplatesService } from "./card-number-print-templates.service";

describe("CardNumberPrintTemplatesService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CardNumberPrintTemplatesService = TestBed.get(
      CardNumberPrintTemplatesService
    );
    expect(service).toBeTruthy();
  });
});
