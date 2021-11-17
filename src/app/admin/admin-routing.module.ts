import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/+login/login.component';
import { MainComponent } from './components/+main/main.component';
import { EmployeesComponent } from './components/+info/employees/employees.component';
import { InfoEmployeComponent } from './components/+info/employes-card/info-employe.component';
import { CustomersComponent } from './components/+info/customers/customers.component';
import { CustomerCardComponent } from './components/+info/customers-card/customer-card.component';
import { EditTextComponent } from './components/+settings/edit-text/edit-text.component';
import { CardListsComponent } from './components/+catalog/card-lists/card-lists.component';
import { CardComponent } from './components/+catalog/card/card.component';
import { HomeComponent } from './components/+home/home.component';
import { StructureCatalogComponent } from "./components/+catalog/structure-catalog/structure-catalog.component";
import { PublishSettingsComponent } from './components/+catalog/publish-settings/publish-settings.component';
import { OrdersComponent } from './components/+catalog/orders/orders.component';
import { ServiceSettingsComponent } from './components/+settings/service-settings/service-settings.component';
import { EmailTemplatesComponent } from './components/+settings/email-templates/email-templates.component';
import { CardPreviewComponent } from './components/+catalog/card-preview/card-preview.component';
import { PrintPreparationComponent } from './components/+catalog/print-preparation/print-preparation.component';
import { PrintProcessComponent } from './components/+catalog/print-process/print-process.component';
import { PrintersComponent } from './components/+settings/printers/printers.component';
import { TestPrintSettingsComponent } from './components/+settings/test-print-settings/test-print-settings.component';
import { PromoBannersComponent } from './components/content/promo-banners/promo-banners.component';
import { GuestOrderCardComponent } from './components/+catalog/guest-order-card/guest-order-card.component';
import { PPMOrdersComponent } from './components/ppm/orders/ppm-orders.component';
import { PPMOrderCardComponent } from './components/ppm/ppm-order-card/ppm-order-card.component';
import { AdminAuthGuardService } from './shared/guards/admin-auth-guard.service';
import { PPMAuthGuardService } from './shared/guards/ppm-auth-guard.service';
import { TextPagesComponent } from './components/content/text-pages/text-pages.component';
import { TextPageCardComponent } from './components/content/text-page-card/text-page-card.component';
import { BlogPostsComponent } from './components/content/blog-posts/blog-posts.component';
import { BlogPostCardComponent } from './components/content/blog-post-card/blog-post-card.component';
import { LegalEntitiesComponent } from './components/+info/legal-entities/legal-entities.component';
import { LegalEntitiesCardComponent } from './components/+info/legal-entities-card/legal-entities-card.component';
import { LegalEntitiesCreateComponent } from './components/+info/legal-entities-create/legal-entities-create.component';
import { InfoTerminalComponent } from './components/+info/terminals-card/info-terminal.component';
import { TerminalsComponent } from './components/+info/terminals/terminals.component';
import { TerminalOrdersComponent } from './components/terminal-orders/terminal-orders.component';
import { TerminalOrderComponent } from './components/terminal-order/terminal-order.component';
import { CardNumberPrintTemplatesComponent } from "./components/+settings/card-number-print-templates/card-number-print-templates.component";
import { CardNumberPrintTemplateCardComponent } from "./components/+settings/card-number-print-templates/card/card.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AdminAuthGuardService],
    children: [
      { path: '', component: HomeComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'employees/add', component: InfoEmployeComponent },
      { path: 'employees/:id', component: InfoEmployeComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'customer/:id', component: CustomerCardComponent },
      { path: 'edit-texts', component: EditTextComponent },
      { path: 'card-lists', component: CardListsComponent },
      { path: 'catalog/:catalog_level_id/add', component: CardComponent },
      { path: 'card/:id', component: CardComponent },
      { path: 'card/preview/:id', component: CardPreviewComponent },
      { path: 'structure-catalog', component: StructureCatalogComponent },
      { path: 'publish-settings', component: PublishSettingsComponent },
      { path: 'order/:id', component: GuestOrderCardComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'print-preparation', component: PrintPreparationComponent },
      { path: 'print-process', component: PrintProcessComponent },
      { path: 'service-settings', component: ServiceSettingsComponent },
      { path: 'email-templates', component: EmailTemplatesComponent },
      { path: 'terminals', component: TerminalsComponent },
      { path: 'terminals/add', component: InfoTerminalComponent },
      { path: 'terminals/:id', component: InfoTerminalComponent },
      { path: 'printers', component: PrintersComponent },
      { path: 'test-print-settings', component: TestPrintSettingsComponent },
      { path: 'promo-banners', component: PromoBannersComponent },
      { path: 'text-pages', component: TextPagesComponent },
      { path: 'text-pages/add', component: TextPageCardComponent },
      { path: 'text-pages/:id', component: TextPageCardComponent },
      { path: 'blog-posts', component: BlogPostsComponent },
      { path: 'blog-posts/add', component: BlogPostCardComponent },
      { path: 'blog-posts/:id', component: BlogPostCardComponent },
      { path: 'legal-entities', component: LegalEntitiesComponent },
      { path: 'legal-entities/:id', component: LegalEntitiesCardComponent },
      { path: 'legal-entities-add', component: LegalEntitiesCreateComponent },
      { path: 'terminal-orders', component: TerminalOrdersComponent },
      { path: 'terminal-order/:id', component: TerminalOrderComponent },
      { path: "card-number-print-templates", component: CardNumberPrintTemplatesComponent },
      { path: "card-number-print-templates/list/add", component: CardNumberPrintTemplateCardComponent },
      { path: "card-number-print-templates/list/:id", component: CardNumberPrintTemplateCardComponent },
      { path: "card-number-print-templates/:tab/:id", component: CardNumberPrintTemplatesComponent },
      { path: "card-number-print-templates/:tab", component: CardNumberPrintTemplatesComponent },
    ]
  },
  {
    path: 'ppm',
    component: MainComponent,
    canActivate: [PPMAuthGuardService],
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      { path: 'orders', component: PPMOrdersComponent },
      { path: 'order/:id', component: PPMOrderCardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
