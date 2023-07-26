import { Product, ProductResolved } from './product';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/internal/Observable';
import { ProductService } from './product.service';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResolved>{

  constructor(private productService: ProductService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
    const id = route.paramMap.get('id')

    if(id && !isNaN(+id))
      return this.productService.getProduct(+id)
        .pipe(
          map(product => ({product: product})),
          catchError(error => {
            const message = `Retrieval error: ${error}`
            console.error(message)
            return of({product: null, error: message})
          })
          )
    return of({product: null, error: 'Messaggio di errore x'})
  }
}
