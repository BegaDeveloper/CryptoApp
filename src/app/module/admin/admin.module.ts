import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { MarketComponent } from './components/market/market.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    MarketComponent,
    HomeComponent,
    NavComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
