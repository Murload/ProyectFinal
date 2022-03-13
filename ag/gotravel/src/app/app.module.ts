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
import { EntryComponent } from './components/views/entry/entry.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProofsideComponent } from './components/views/entry/proofside/proofside.component';
import { BlockNewTripComponent } from './components/views/entry/block-new-trip/block-new-trip.component';


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
    EntryComponent,
    SidebarComponent,
    ProofsideComponent,
    BlockNewTripComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
