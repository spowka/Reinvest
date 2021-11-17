import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map, tap } from 'rxjs/internal/operators';
import { of } from 'rxjs';
import { BackendService } from 'src/app/shared/backend/backend.service';
import { SiteAuthService } from 'src/app/site/shared/auth-service/auth.service';
import { SearchResult, SuggestsResult } from './site-search.model';
import { CartService } from '../cart/cart.service';
import { searchMarker1, searchMarker2 } from 'src/app/consts';

const cartStorageKey: string = "cartData";

@Injectable({
  providedIn: 'root'
})
export class SiteSearchService {
  private prefix = '/site-search';

  public searchString = new BehaviorSubject<string>(null);

  constructor(
    private http: HttpClient,
    private auth: SiteAuthService,
    private backend: BackendService,
    private cartService: CartService,
  ) {
  }

  public search(searchString: string) {
    this.searchString.next(searchString);
    return this.http.post<SearchResult>(`${environment.API}${this.prefix}/search`, { searchString }).pipe(
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }

  public getSuggests(searchString: string) {
    return searchString ? this.http.get<SuggestsResult>(`${environment.API}${this.prefix}/suggests/${searchString}`).pipe(
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    ) : of<SuggestsResult>(null);
  }

  public processSearchMarkers(src: string) {
    var result = src.replace(searchMarker1, '<span class="search-result">').replace(searchMarker2, '</span>');
    return result;
  }
}
