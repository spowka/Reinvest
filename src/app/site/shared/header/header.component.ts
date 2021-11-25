import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit,
  OnDestroy, ChangeDetectorRef
} from '@angular/core';
import { SiteAuthService } from '../auth-service/auth.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CatalogService } from 'src/app/admin/shared/catalog/catalog.service';
import { TextPageMenuModel } from 'src/app/admin/shared/catalog/catalog.model';
import { CartService } from 'src/app/admin/shared/cart/cart.service';
import { Subscription, fromEvent, Observable } from 'rxjs';
import { SiteSearchService } from 'src/app/admin/shared/site-search/site-search.service';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { GetActiveOrdersResponse, GetFinishedOrdersResponse } from '../profile/profile.model';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'rs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchInput', {}) searchInput: ElementRef;
  @ViewChild('headerControlsMobile') headerControlsMobile: ElementRef;
  @ViewChild('headerMenu') headerMenu: ElementRef;
  @ViewChild('headerPopup') headerPopup: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.makeMobileMenu(event.target.innerWidth);
  }

  isLoading: boolean;
  isMobile: boolean;
  fullName: string;
  cartItems: number;
  cartPrice: number;
  countdownTime: string;
  isAuthenticated: boolean;
  catalogTree: any[];
  pages: TextPageMenuModel[];
  selectedTheme: any[] = null;
  searchString: string;
  searchSuggests: string[] = [];
  mobileScreenWidth: number = 1030;
  isPageIncludesBanner: boolean;
  moreCatalogTree: any[];
  selectedCatalogTree: boolean;
  isSearchPage: boolean;

  activeOrders$: Observable<GetActiveOrdersResponse>;
  finishedOrders$: Observable<GetFinishedOrdersResponse>;

  private _subscriptions: Subscription[] = [];

  constructor(
    private auth: SiteAuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private catalogService: CatalogService,
    private cartService: CartService,
    private searchService: SiteSearchService,
    private cdr: ChangeDetectorRef,
    private profileService: ProfileService,
  ) {
    this._subscriptions.push(this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.loadData();
        this.isPageIncludesBanner = this.router.url === '/' || this.router.url.includes('catalog');
      }
    }));

    if(this.router.url.includes('search')) {
      this.isSearchPage = true;
    }
  }

  ngOnInit() {
    var thisComponent = this;
    this._subscriptions.push(this.auth.currentUser.subscribe((value) => {
      thisComponent.fullName = value && value.fullName;
      thisComponent.isAuthenticated = value && value.userType != 'Guest' && true;
    }));
    this.auth.reloadUserIfNotLoaded();

    this._subscriptions.push(this.cartService.cartState.subscribe(
      data => {
        this.cartItems = data ? data.totalCount : undefined;
        this.cartPrice = data ? data.totalPrice : undefined;
      }
    ));
    this._subscriptions.push(this.searchService.searchString.subscribe(value => {
      if (this.searchString != value) {
        this.searchString = value;
      }
    }));
    this._subscriptions.push(
      fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
        debounceTime(500), distinctUntilChanged(),
        tap(() => {
          this.loadSearchSuggests();
        })
      ).subscribe()
    );
    this._subscriptions.push(this.cartService.cartCountdownState.subscribe(
      value => this.countdownTime = value
    ));

    this.activeOrders$ = this.profileService.getActiveOrders();
    this.finishedOrders$ = this.profileService.getFinishedOrders(undefined, undefined);
  }

  ngAfterViewInit() {
    this.makeMobileMenu(window.innerWidth);
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sb => sb.unsubscribe());
  }

  expandTheme(theme: any) {
    if (theme.children && theme.children.length > 0) {
      this.selectedTheme = theme;
    } else {
      this.selectedTheme = null;
    }
  }

  expandCatalogTree(catalogTree: any) {
    if (catalogTree.length > 5) {
      this.moreCatalogTree = catalogTree.slice(5);
      this.selectedCatalogTree = true;
    } else {
      this.selectedCatalogTree = false;
    }
  }

  collapseTheme() {
    this.deselectTheme();
  }

  collapseCatalogTreee() {
    this.deselectCatalogTree();
  }

  makeMobileMenu(currentWidth: number): void {
    if (currentWidth <= this.mobileScreenWidth) {
      this.isMobile = true;
    }

    this.headerControlsMobile.nativeElement.innerHTML = currentWidth >= this.mobileScreenWidth
      ? ''
      : (`<div class="hamburger"><span></span></div>`);
  }

  mobileMenuToggle(): void {
    if (window.innerWidth <= this.mobileScreenWidth) {
      this.headerMenu.nativeElement.classList.toggle('active');
      this.headerControlsMobile.nativeElement.querySelector('.hamburger').classList.toggle('active');

      document.querySelector('html').classList.toggle('overflow');
    }
  }

  deselectTheme() {
    this.selectedTheme = null;
  }

  deselectCatalogTree() {
    this.selectedCatalogTree = false;
  }

  loadData() {
    this.catalogService.getMenuTree().subscribe(
      response => {
        this.catalogTree = response.themes.map(theme => ({
          ...theme,
          children: theme.children.map(series => ({
            ...series,
            children: series.children
          }))
        }));
        this.pages = response.pages;
      }
    );
    this.cartService.reloadCart();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  getPageTitle(pageName: string) {
    var page = this.pages && this.pages.find(t => t.logicalName == pageName);
    return page && page.title || '';
  }

  search() {
    this.gotoSearchPage(this.searchString && this.searchString.trim());
  }

  searchSuggestSelected($event) {
    this.gotoSearchPage($event.option.value);
  }

  gotoSearchPage(ss: string) {
    if (ss) {
      this.router.navigate(['/search/', ss]);
    }
  }

  goToProfile(event, type: string): void {
    if (type) {
      event.stopPropagation();
    }
    this.router.navigate(['/profile'], { queryParams: { type } });
  }

  loadSearchSuggests() {
    var ss = this.searchString && this.searchString.trim();
    if (ss) {
      this.searchSuggests = [];
      this.searchService.getSuggests(ss).subscribe(
        response => {
          this.searchSuggests = response.suggests;
        }
      );
    }
  }
}
