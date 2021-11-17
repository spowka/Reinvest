import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/components/+home/home.component';
import { MainComponent } from './site/components/+main/main.component';
import { LoginComponent } from './site/components/+auth/login/login.component';
import { AuthComponent } from './site/components/+auth/auth/auth.component';
import { RestorePasswordComponent } from './site/components/+auth/restore-password/restore-password.component';
import { CreatePasswordComponent } from './site/components/+auth/create-password/create-password.component';
import { LoginCompleteComponent } from './site/components/+auth/login-complete/login-complete.component';
import { AuthCompleteComponent } from './site/components/+auth/auth-complete/auth-complete.component';
import { CatalogComponent } from './site/components/catalog/catalog.component';
import { CartComponent } from './site/components/cart/cart.component';
import { CreateOrderComponent } from './site/components/create-order/create-order.component';
import { OrderCreatedComponent } from './site/components/order-created/order-created.component';
import { ConfirmEmailComponent } from './site/components/+auth/confirm-email/confirm-email.component';
import { ProfileComponent } from './site/components/profile/profile.component';
import { TextPageComponent } from './site/components/text-page/text-page.component';
import { BlogFeedComponent } from './site/components/blog-feed/blog-feed.component';
import { BlogPostComponent } from './site/components/blog-post/blog-post.component';
import { SearchResultsComponent } from './site/components/search-results/search-results.component';
import { AboutComponent } from './site/components/about/about.component';
import { HowtoComponent } from './site/components/howto/howto.component';
import { ShippingComponent } from './site/components/shipping/shipping.component';
import { FAQComponent } from './site/components/faq/faq.component';
import { ContactsComponent } from './site/components/contacts/contacts.component';

const routes: Routes = [
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'catalog/:id', component: CatalogComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login-complete', component: LoginCompleteComponent },
      { path: 'authorization', component: AuthComponent },
      { path: 'authorization-complete', component: AuthCompleteComponent },
      { path: 'confirm-email', component: ConfirmEmailComponent },
      { path: 'restore-password', component: RestorePasswordComponent },
      { path: 'create-password', component: CreatePasswordComponent },
      { path: 'cart', component: CartComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'create-order', component: CreateOrderComponent },
      { path: 'order-created', component: OrderCreatedComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogFeedComponent },
      { path: 'blog/:post', component: BlogPostComponent },
      { path: 'howto', component: HowtoComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'faq', component: FAQComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: ':page', component: TextPageComponent },
      { path: 'search/:searchString', component: SearchResultsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
