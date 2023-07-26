import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectiveStrategy implements PreloadingStrategy{
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']){ //solamente se la route dice di precaricare i moduli li carichiamo, altrimenti no...
      return fn()
    }
    return of(null)
  }
}
