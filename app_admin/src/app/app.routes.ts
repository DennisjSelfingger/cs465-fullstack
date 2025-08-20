import { Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing';
import { AddTripComponent } from './add-trip/add-trip';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'add-trip', component: AddTripComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: TripListingComponent, pathMatch: 'full' }
];