import { UserCardComponent } from './user-card/user-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MonthlySalesChartComponent } from './monthly-sales-chart/monthly-sales-chart.component';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoadingComponent,
    MonthlySalesChartComponent,
    NavbarComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoadingComponent,
    MonthlySalesChartComponent,
    NavbarComponent,
    UserCardComponent
  ]
})
export class ComponentsModule { }
