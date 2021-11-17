import { TestBed } from "@angular/core/testing";

import { CardNumberPrintTemplatesAssignService } from "./card-number-print-templates-assign.service";

describe("CardNumberPrintTemplatesAssignService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CardNumberPrintTemplatesAssignService = TestBed.get(
      CardNumberPrintTemplatesAssignService
    );
    expect(service).toBeTruthy();
  });
});
