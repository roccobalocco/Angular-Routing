import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';

import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card'; // Import the NzCardModule
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTagModule } from 'ng-zorro-antd/tag';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
    NzFormModule,
    FormsModule,
    NzButtonModule,
    NzTableModule,
    NzAnchorModule,
    NzIconModule.forRoot(icons),
    NzSpaceModule,
    NzCardModule,
    NzBadgeModule,
    NzTagModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
  ]
})
export class ProductModule { }
