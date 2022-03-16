import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { RegisterComponent } from './components/views/register/register.component';
import { NanniesComponent } from './components/views/nannies/nannies.component';
import { MoneyConverterComponent } from './components/views/money-converter/money-converter.component';
import { TouristPlanComponent } from './components/views/tourist-plan/tourist-plan.component';
import { NewTripComponent } from './components/views/new-trip/new-trip.component';
import { PublicTripComponent } from './components/views/public-trip/public-trip.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Section1Component } from './components/views/home/section1/section1.component';
import { AboutUsComponent } from './components/views/home/about-us/about-us.component';
import { OurServicesComponent } from './components/views/home/our-services/our-services.component';
import { FooterComponent } from './footer/footer.component';
import { EntryComponent } from './components/views/entry/entry.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BlockNewTripComponent } from './components/views/entry/block-new-trip/block-new-trip.component';
import { BlockVisitComponent } from './components/views/entry/block-visit/block-visit.component';
import { TitledescComponent } from './components/views/new-trip/titledesc/titledesc.component';
import { FormNewtripComponent } from './components/views/new-trip/form-newtrip/form-newtrip.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NanniesComponent,
    MoneyConverterComponent,
    TouristPlanComponent,
    NewTripComponent,
    PublicTripComponent,
    NavbarComponent,
    Section1Component,
    AboutUsComponent,
    OurServicesComponent,
    FooterComponent,
    EntryComponent,
    SidebarComponent,
    BlockNewTripComponent,
    BlockVisitComponent,
    TitledescComponent,
    FormNewtripComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
