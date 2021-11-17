import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/+login/login.component';
import { MainComponent } from './components/+main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EmployeesComponent } from './components/+info/employees/employees.component';
import { InfoEmployeComponent } from './components/+info/employes-card/info-employe.component';
import { CustomersComponent } from './components/+info/customers/customers.component';
import { CustomerCardComponent } from './components/+info/customers-card/customer-card.component';
import { HomeComponent } from './components/+home/home.component';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { CalendarModule } from 'primeng/calendar';
import { EditTextComponent } from './components/+settings/edit-text/edit-text.component';
import { PanelModule } from 'primeng/panel';
import { TableInfoComponent } from './shared/table-info/table-info.component';
import { FilterDataPipe } from './shared/table-info/filter-data.pipe';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, DialogService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { CardListsComponent } from './components/+catalog/card-lists/card-lists.component';
import { TreeModule } from 'primeng/tree';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardComponent } from './components/+catalog/card/card.component';
import { StructureCatalogComponent } from './components/+catalog/structure-catalog/structure-catalog.component';
import { SharedModule } from '../shared/shared.module';
import { CreateSubjectComponent } from './components/+catalog/subject/create-subject/create-subject.component';
import { ImageUploadComponent } from './shared/image-upload/image-upload.component';
import { ngfModule } from "angular-file"
import { SelectButtonModule } from 'primeng/selectbutton';
import { CardMoveComponent } from './components/+catalog/card-move/card-move.component';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';
import { SubstitutePipe } from './shared/substitute/substitute.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PublishSettingsComponent } from './components/+catalog/publish-settings/publish-settings.component';
import { OrdersComponent } from './components/+catalog/orders/orders.component';
import { ServiceSettingsComponent } from './components/+settings/service-settings/service-settings.component';
import { EmailTemplatesComponent } from './components/+settings/email-templates/email-templates.component';
import { TerminalsComponent } from './components/+info/terminals/terminals.component';
import { TerminalsComponent as TerminalsListComponent } from './components/terminals/terminals.component';

import { AttachTerminalComponent } from './components/+info/legal-entities-card/attach-terminal/attach-terminal.component';
import { CardPreviewComponent } from './components/+catalog/card-preview/card-preview.component';
import { CardStatusHistoryComponent } from './components/+catalog/card/card-status-history/card-status-history.component';
import { PrintPreparationComponent } from './components/+catalog/print-preparation/print-preparation.component';
import { PrintProcessComponent } from './components/+catalog/print-process/print-process.component';
import { ChangeCardStatusComponent } from './components/+catalog/print-process/change-card-status/change-card-status.component';
import { PrintersComponent } from './components/+settings/printers/printers.component';
import { TestPrintSettingsComponent } from './components/+settings/test-print-settings/test-print-settings.component';
import { SortArrowsComponent } from './shared/sort-arrows/sort-arrows.component';
import { PromoBannersComponent } from './components/content/promo-banners/promo-banners.component';
import { GuestOrderCardComponent } from './components/+catalog/guest-order-card/guest-order-card.component';
import { PickupPointsCardComponent } from './components/+info/legal-entities-card/pickup-points-card/pickup-points-card.component';
import { PickupPointsComponent } from './components/+info/legal-entities-card/pickup-points/pickup-points.component';
import { CustomerInfoComponent } from './components/+info/customers-card/customer-info/customer-info.component';
import { CustomerOrderStatusHistoryComponent } from './components/+info/customers-card/customer-order-status-history/customer-order-status-history.component';
import { CustomerFinishedOrdersComponent } from './components/+info/customers-card/customer-finished-orders/customer-finished-orders.component';
import { CustomerActiveOrdersComponent } from './components/+info/customers-card/customer-active-orders/customer-active-orders.component';
import { CustomerOrderDetailsComponent } from './components/+info/customers-card/customer-order-details/customer-order-details.component';
import { NgxMaskModule } from 'ngx-mask';
import { PPMOrdersComponent } from './components/ppm/orders/ppm-orders.component';
import { PPMOrderCardComponent } from './components/ppm/ppm-order-card/ppm-order-card.component';
import { PPMOrderDetailsComponent } from './components/ppm/ppm-order-card/ppm-order-details/ppm-order-details.component';
import { PPMOrderStatusHistoryComponent } from './components/ppm/orders/ppm-order-status-history/ppm-order-status-history.component';
import { TextPagesComponent } from './components/content/text-pages/text-pages.component';
import { TextPageCardComponent } from './components/content/text-page-card/text-page-card.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogPostsComponent } from './components/content/blog-posts/blog-posts.component';
import { BlogPostCardComponent } from './components/content/blog-post-card/blog-post-card.component';
import { LegalEntitiesComponent } from './components/+info/legal-entities/legal-entities.component';
import { LegalEntitiesCardComponent } from './components/+info/legal-entities-card/legal-entities-card.component';
import { DisplaySettingsComponent } from './components/+info/legal-entities-card/display-settings/display-settings.component';
import { TerminalsComponent as LegalEntitiesTerminalsComponent } from './components/+info/legal-entities-card/terminals/terminals.component';
import { LegalEntitiesCreateComponent } from './components/+info/legal-entities-create/legal-entities-create.component';
import { InfoTerminalComponent } from './components/+info/terminals-card/info-terminal.component';
import { InfoTerminalComponent as TerminalCardInfoTerminal } from './components/terminals/terminals-card/info-terminal.component';
import { APatternRestrict } from '../a-pattern-restrict';
import { TerminalOrdersComponent } from './components/terminal-orders/terminal-orders.component';
import { TerminalOrderComponent } from './components/terminal-order/terminal-order.component';
import { CardNumberPrintTemplatesComponent } from './components/+settings/card-number-print-templates/card-number-print-templates.component';
import { CardNumberPrintTemplateCardComponent } from './components/+settings/card-number-print-templates/card/card.component';
import { CardNumberPrintTemplatesListComponent } from './components/+settings/card-number-print-templates/list/list.component';
import { CardNumberPrintTemplatesAssignComponent } from './components/+settings/card-number-print-templates/assign/assign.component';

@NgModule({
  entryComponents: [
    CreateSubjectComponent,
    CardMoveComponent,
    AttachTerminalComponent,
    CardStatusHistoryComponent,
    ChangeCardStatusComponent,
    CustomerOrderStatusHistoryComponent,
    CustomerOrderDetailsComponent,
    PPMOrderDetailsComponent,
    PPMOrderStatusHistoryComponent,
    CardNumberPrintTemplatesListComponent,
    CardNumberPrintTemplatesAssignComponent,
  ],
  declarations: [
    APatternRestrict,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    EmployeesComponent,
    InfoEmployeComponent,
    CustomersComponent,
    CustomerCardComponent,
    CustomerInfoComponent,
    CustomerActiveOrdersComponent,
    CustomerFinishedOrdersComponent,
    CustomerOrderStatusHistoryComponent,
    HomeComponent,
    BreadcrumbsComponent,
    EditTextComponent,
    BreadcrumbsComponent,
    TableInfoComponent,
    SortArrowsComponent,
    FilterDataPipe,
    CardListsComponent,
    CardComponent,
    CardPreviewComponent,
    StructureCatalogComponent,
    CreateSubjectComponent,
    CardStatusHistoryComponent,
    ImageUploadComponent,
    CardMoveComponent,
    SubstitutePipe,
    PublishSettingsComponent,
    OrdersComponent,
    GuestOrderCardComponent,
    PrintPreparationComponent,
    PrintProcessComponent,
    ServiceSettingsComponent,
    EmailTemplatesComponent,
    TerminalsComponent,
    TerminalsListComponent,
    InfoTerminalComponent,
    TerminalCardInfoTerminal,
    AttachTerminalComponent,
    ChangeCardStatusComponent,
    PrintersComponent,
    TestPrintSettingsComponent,
    PromoBannersComponent,
    PickupPointsComponent,
    PickupPointsCardComponent,
    CustomerOrderDetailsComponent,
    PPMOrdersComponent,
    PPMOrderCardComponent,
    PPMOrderDetailsComponent,
    PPMOrderStatusHistoryComponent,
    TextPagesComponent,
    TextPageCardComponent,
    BlogPostsComponent,
    BlogPostCardComponent,
    LegalEntitiesComponent,
    LegalEntitiesCardComponent,
    DisplaySettingsComponent,
    LegalEntitiesTerminalsComponent,
    LegalEntitiesCreateComponent,
    TerminalOrdersComponent,
    TerminalOrderComponent,
    CardNumberPrintTemplatesComponent,
    CardNumberPrintTemplateCardComponent,
    CardNumberPrintTemplatesListComponent,
    CardNumberPrintTemplatesAssignComponent
  ],
  imports: [
    CKEditorModule,
    CommonModule,
    AdminRoutingModule,
    MenubarModule,
    TableModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    FormsModule,
    MessageModule,
    CalendarModule,
    PanelModule,
    ConfirmDialogModule,
    ToastModule,
    TreeModule,
    DropdownModule,
    RadioButtonModule,
    TreeTableModule,
    SharedModule,
    ngfModule,
    SelectButtonModule,
    DynamicDialogModule,
    DragDropModule,
    DropdownModule,
    NgxMaskModule.forRoot({})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService
  ]
})
export class AdminModule { }
