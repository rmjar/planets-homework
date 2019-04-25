import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHelperService {

  private searchSource = new Subject<string>();

  searchSource$ = this.searchSource.asObservable();

  announceSearch(searchTerm: string) {
    this.searchSource.next(searchTerm);
  }
}
