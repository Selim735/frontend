import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { RoutesComponent } from './admin/routes/routes.component';
import { AddComponent } from './admin/routes/add/add.component';
import { FleetComponent } from './admin/fleet/fleet.component';
import { MaintenanceComponent } from './admin/maintenance/maintenance.component';
import { PassengerComponent } from './passenger/passenger.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AdminComponent,
    // Declare non-standalone components here:
    RoutesComponent,
    AddComponent,
    FleetComponent,
    MaintenanceComponent,
    //PassengerComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,     // Imports RouterModule.forRoot(...) from app-routing
    HttpClientModule      // Ensures you can use HttpClient in your services
    // Note: BrowserModule already includes CommonModule, so *ngIf/*ngFor work.
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
