import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

// My imports
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { MoneyConverterComponent } from './components/views/money-converter/money-converter.component';
import { NanniesComponent } from './components/views/nannies/nannies.component';
import { NewTripComponent } from './components/views/new-trip/new-trip.component';
import { PublicTripComponent } from './components/views/public-trip/public-trip.component';
import { RegisterComponent } from './components/views/register/register.component';
import { TouristPlanComponent } from './components/views/tourist-plan/tourist-plan.component';
import { Page404Component } from './components/page404/page404.component';

import { AboutUsComponent } from './components/views/home/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';


import { EntryComponent } from './components/views/entry/entry.component';
import { OtherTripsComponent } from './components/views/other-trips/other-trips.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path: '', component: HomeComponent,  },
  { path: '404', component:  Page404Component},
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'money', canActivate: [ AuthGuard ],component: MoneyConverterComponent },
  { path: 'nana', canActivate: [ AuthGuard ],component: NanniesComponent },
  { path: 'newtrip', canActivate: [ AuthGuard ],component: NewTripComponent },
  { path: 'publictrip', canActivate: [ AuthGuard ], component: PublicTripComponent },
  { path: 'plan', canActivate: [ AuthGuard ], component: TouristPlanComponent },
  { path: 'sesion', canActivate: [ AuthGuard ], component: EntryComponent },
  { path: 'othertrips', canActivate: [ AuthGuard ], component: OtherTripsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
