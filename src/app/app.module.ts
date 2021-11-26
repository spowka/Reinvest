import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CookieService } from 'ngx-cookie-service';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgxMaskModule } from 'ngx-mask';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MessageModule } from 'primeng/message';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TreeModule } from 'primeng/tree';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TreeTableModule } from 'primeng/treetable';
import { SharedModule } from 'primeng/components/common/shared';
import { ngfModule } from 'angular-file';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ToastModule } from 'primeng/toast';

import { MessageService, ConfirmationService, DialogService } from 'primeng/api';

import { SameHeightDirective } from './shared/same-height-directive/same-height.directive';
import { MaintainScrollDirective } from './shared/maintain-scroll-directive/maintain-scroll.directive';
import { SafeHtmlPipe } from './admin/shared/safeHtml/safeHtml';
import { FitIntoDirective } from './shared/fit-into-directive/fit-into.directive';
import { OnlyNumbersDirective } from './shared/only-numbers-directive/onlynumbers.directive';
import { DisabledInputValueDirective } from './shared/disabled-input-value-directive/disabledInputValue.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './site/components/+home/home.component';
import { HeaderComponent } from './site/shared/header/header.component';
import { FooterComponent } from './site/shared/footer/footer.component';
import { MainComponent } from './site/components/+main/main.component';
import { LoginComponent } from './site/components/+auth/login/login.component';
import { AuthComponent } from './site/components/+auth/auth/auth.component';
import { RestorePasswordComponent } from './site/components/+auth/restore-password/restore-password.component';
import { CreatePasswordComponent } from './site/components/+auth/create-password/create-password.component';
import { LoginCompleteComponent } from './site/components/+auth/login-complete/login-complete.component';
import { AuthCompleteComponent } from './site/components/+auth/auth-complete/auth-complete.component';
import { CatalogComponent } from './site/components/catalog/catalog.component';
import { CardComponent } from './site/components/card/card.component';
import { CartComponent } from './site/components/cart/cart.component';
import { CreateOrderComponent } from './site/components/create-order/create-order.component';
import { SiteTokenHttpInterceptor } from './site/shared/site-token-http-interceptor';
import { OrderCreatedComponent } from './site/components/order-created/order-created.component';
import { ConfirmEmailComponent } from './site/components/+auth/confirm-email/confirm-email.component';
import { CarouselComponent } from './site/shared/carousel/carousel.component';
import { ProfileComponent } from './site/components/profile/profile.component';
import { ProfileInfoComponent } from './site/components/profile/user-info/profile-info.component';
import { ProfileOrderStatusHistoryComponent } from './site/components/profile/profile-order-status-history/profile-order-status-history.component';
import { ProfileFinishedOrdersComponent } from './site/components/profile/profile-finished-orders/profile-finished-orders.component';
import { ProfileActiveOrdersComponent } from './site/components/profile/profile-active-orders/profile-active-orders.component';
import { TextPageComponent } from './site/components/text-page/text-page.component';
import { BlogFeedComponent } from './site/components/blog-feed/blog-feed.component';
import { BlogPostComponent } from './site/components/blog-post/blog-post.component';
import { SearchResultsComponent } from './site/components/search-results/search-results.component';
import { PickpointsMapComponent } from './shared/pickpoints-map/pickpoints-map.component';
import { OfficeMapComponent } from './shared/office-map/office-map.component';
import { OrderPaymentComponent } from './site/components/create-order/order-payment/order-payment.component';
import { CaptchaDialogComponent } from './site/components/captcha-dialog/captcha-dialog.component';
import { APatternRestrict } from './a-pattern-restrict';
import { CardItemComponent } from './site/shared/card-item/card-item.component';
import { SiteBreadcrumbsComponent } from './site/shared/site-breadcrumbs/site-breadcrumbs.component';
import { CardListComponent } from './site/shared/card-list/card-list.component';
import { AboutComponent } from './site/components/about/about.component';
import { HowtoComponent } from './site/components/howto/howto.component';
import { ShippingComponent } from './site/components/shipping/shipping.component';
import { FAQComponent } from './site/components/faq/faq.component';
import { ContactsComponent } from './site/components/contacts/contacts.component';
import { SidebarHelpfulComponent } from './site/shared/sidebar-helpful/sidebar-helpful.component';
import { CardListCardsComponent } from './site/shared/card-list-cards/card-list-cards.component';
import { BlogListComponent } from './site/shared/blog-list/blog-list.component';
import { ConfirmDialogComponent } from './site/components/confirm-dialog/confirm-dialog.component';

registerLocaleData(localeRu, 'ru')

@NgModule({
  entryComponents: [
    CardComponent,
    ProfileOrderStatusHistoryComponent,
    OrderPaymentComponent,
    CaptchaDialogComponent,
    ConfirmDialogComponent
  ],
  declarations: [
    AppComponent,
    // APatternRestrict,

    SameHeightDirective,
    MaintainScrollDirective,
    OnlyNumbersDirective,
    DisabledInputValueDirective,
    SafeHtmlPipe,
    FitIntoDirective,

    HomeComponent,
    CatalogComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    LoginCompleteComponent,
    AuthComponent,
    AuthCompleteComponent,
    RestorePasswordComponent,
    CreatePasswordComponent,
    CartComponent,
    ProfileComponent,
    ProfileInfoComponent,
    ProfileActiveOrdersComponent,
    ProfileFinishedOrdersComponent,
    ProfileOrderStatusHistoryComponent,
    CreateOrderComponent,
    OrderCreatedComponent,
    ConfirmEmailComponent,
    CardComponent,
    CarouselComponent,
    TextPageComponent,
    BlogFeedComponent,
    BlogPostComponent,
    SearchResultsComponent,
    PickpointsMapComponent,
    OfficeMapComponent,
    OrderPaymentComponent,
    CaptchaDialogComponent,
    FooterComponent,
    CardItemComponent,
    SiteBreadcrumbsComponent,
    CardListComponent,
    AboutComponent,
    HowtoComponent,
    ShippingComponent,
    FAQComponent,
    ContactsComponent,
    SidebarHelpfulComponent,
    CardListCardsComponent,
    BlogListComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CKEditorModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    MatAutocompleteModule,
    MatInputModule,

    MenubarModule,
    TableModule,
    BreadcrumbModule,
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
    RecaptchaModule,
    SlickCarouselModule,
    NgxMaskModule.forRoot({})
  ],
  providers: [
    CookieService,
    MessageService,
    DialogService,
    ConfirmationService,
    // { provide: LOCALE_ID, useValue: "ru-RU" },
    { provide: HTTP_INTERCEPTORS, useClass: SiteTokenHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
