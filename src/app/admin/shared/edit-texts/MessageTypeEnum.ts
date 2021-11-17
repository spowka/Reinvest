export type MessageTypeEnum =
    "EmployeeArchiving" |
    "EmployeeRestoring" |
    "EmployeeDeleting" |
    "EmployeeSendingRegData" |
    "CustomerArchiving" |
    "CustomerRestoring" |
    "CustomerDeleting" |
    "CustomerSendingRegData" |
    "CatalogStructureThemeDeleting" |
    "CatalogStructureSeriesDeleting" |
    "CatalogStructureSetDeleting" |
    "CatalogStructureDeleteImpossibleWhenHaveCards" |
    "CardCatalogArchiving" |
    "CardCatalogMoving" | //сейчас не используется (скорее всего должен использоваться)
    "CardCatalogRestoring" |
    "CardCatalogDeleting" |
    "TerminalOwnerArchiving" | //сейчас не используется (скорее всего должен использоваться)
    "TerminalOwnerRestoring" | //сейчас не используется (скорее всего должен использоваться)
    "TerminalOwnerDeleting" | //сейчас не используется (скорее всего должен использоваться)
    "TerminalOwnerTerminalDetach" |
    "TerminalOwnerSendingRegData" | //сейчас не используется (скорее всего должен использоваться)
    "TerminalArchiving" |
    "TerminalRestoring" |
    "TerminalDeleting" |
    "TerminalHasOwner" |
    "TerminalEmbeddedCountdown" | //в этом проекте не используется, нужен для терминалов
    "CardCatalogCannotArchiveNoAccess" | //сейчас не используется (скорее всего должен использоваться)
    "CardCatalogCannotArchiveActiveOrders" | //сейчас не используется (скорее всего должен использоваться)
    "CardCatalogActivateCard" |
    "CardCatalogDeactivateCard" |
    "PrintingStart" |
    "PrintingAlreadyStarted" | //сейчас не используется (скорее всего должен использоваться)
    "PrintingStopPrinter" |
    "PrintingStopAllPrinters" |
    "PrintingReject" |
    "PrintingCancel" |
    "PrintingComplete" |
    "PickupPointsOwnerArchiving" | //сейчас не используется (скорее всего должен использоваться)
    "PickupPointsOwnerRestoring" |
    "PickupPointArchiving" |
    "PickupPointRestoring" |
    "PickupPointSendingRegData" |
    "CartGuestContactsNotice" |
    "CartCustomerContactsNotice" |
    "CartOrderPickupNotice" |
    "CartOrderDeliveryNotice" |
    "OrderReturnFromPickPoint" | //сейчас не используется (скорее всего должен использоваться)
    "PickPointArmAwaitingDelivery" |
    "CartAddCard" |
    "CartCountdown" |
    "CartCountdownEnd" |
    "OrderCountdown" |
    "OrderCountdownEnd" |
    "OrderPayment" |
    "OrderGuestCreateAccount" |
    "OrderGuestCreateAccountErrorDuplicateEmail" |
    "CatalogAddCardSoldoutError" |
    "PrintingForceShutdownMessage" |
    "PrintingForceShutdownDelayedMessage" |
    "LegalEntitiesArchiving" |
    "LegalEntitiesDeleting" | //сейчас не используется
    "LegalEntitiesRestoring" | //сейчас не используется(скорее всего должен использоваться)
    "LegalEntitiesSendingRegData" | //сейчас не используется(скорее всего должен использоваться)
    "CardNumberPrintTemplateDelete" |
    "CardNumberPrintTemplateDeleteError"
    ;