import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// My imports
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { MoneyConverterComponent } from './components/views/money-converter/money-converter.component';
import { NanniesComponent } from './components/views/nannies/nannies.component';
import { NewTripComponent } from './components/views/new-trip/new-trip.component';
import { PublicTripComponent } from './components/views/public-trip/public-trip.component';
import { RegisterComponent } from './components/views/register/register.component';
import { TouristPlanComponent } from './components/views/tourist-plan/tourist-plan.component';
import { EntryComponent } from './components/views/entry/entry.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'money', component: MoneyConverterComponent },
  { path: 'nana', component: NanniesComponent },
  { path: 'newtrip', component: NewTripComponent },
  { path: 'publictrip', component: PublicTripComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'plan', component: TouristPlanComponent },
  { path: 'sesion', component: EntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
