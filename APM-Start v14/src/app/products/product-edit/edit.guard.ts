import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from './product-edit.component';

@Injectable({
  providedIn: 'root',
})
export class EditGuard implements CanDeactivate<ProductEditComponent> {

  canDeactivate(component: ProductEditComponent, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    return component.dataIsValid['info'] && component.dataIsValid['tags']
  }
}
