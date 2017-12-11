import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardcomponentComponent } from './dashboardcomponent/dashboardcomponent.component';
import { MyhighlighterDirective } from './myhighlighter.directive';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DashboardcomponentComponent, MyhighlighterDirective, FilterPipe],
  exports: [DashboardcomponentComponent, MyhighlighterDirective]
})
export class DashboardmoduleModule { }
