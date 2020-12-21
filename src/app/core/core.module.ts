import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutletComponent } from './components/router-outlet/router-outlet.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [RouterOutletComponent],
  exports: [RouterOutletComponent]
})
export class CoreModule { }
