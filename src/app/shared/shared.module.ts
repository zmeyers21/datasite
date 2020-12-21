import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { NameComponent } from './components/name/name.component';
import { CityComponent } from './components/city/city.component';
import { StateComponent } from './components/state/state.component';
import { ZipComponent } from './components/zip/zip.component';
import { PhoneComponent } from './components/phone/phone.component';
import { EmailComponent } from './components/email/email.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, NameComponent, CityComponent, StateComponent, ZipComponent, PhoneComponent, EmailComponent, CommentsComponent],
  exports: [ProductComponent]
})
export class SharedModule { }
