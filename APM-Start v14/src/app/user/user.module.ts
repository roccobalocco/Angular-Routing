import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input'
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent}
    ]),
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzIconModule.forRoot(icons),
    NzGridModule,
    NzSpaceModule,
    NzCardModule,
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
