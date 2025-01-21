import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { RoutesComponent } from './admin/routes/routes.component';
import { AddComponent } from './admin/routes/add/add.component';
import { MaintenanceComponent } from './admin/maintenance/maintenance.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/routes', component: RoutesComponent },
  { path: 'admin/routes/add', component: AddComponent },
  { path: 'admin/fleet', component: AddComponent },
  { path: 'admin/maintenance', component: MaintenanceComponent },
  { path: 'Vehicule', component: VehiculeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
