import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list.component';
import { ProductResolver } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { AuthGuard } from '../user/auth.guard';
import { EditGuard } from './product-edit/edit.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'products',
        children: [
          { path: '', component: ProductListComponent },
          {
            path: ':id',
            component: ProductDetailComponent,
            resolve: { resolvedData: ProductResolver },
          },
          {
            path: ':id/edit',
            component: ProductEditComponent,
            resolve: { resolvedData: ProductResolver },
            canDeactivate: [EditGuard],
            children: [
              { path: '', redirectTo: "info", pathMatch: 'full', outlet: 'info' },
              {
                path: 'info',
                component: ProductEditInfoComponent,
                outlet: 'info'
              },
              {
                path: 'tags',
                component: ProductEditTagsComponent,
                outlet: 'tags'
              },
            ],
          },
        ],
        canActivate: [AuthGuard]
      },
    ]),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
