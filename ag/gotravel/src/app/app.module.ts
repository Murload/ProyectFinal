import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

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
import { FooterComponent } from './components/footer/footer.component';
import { EntryComponent } from './components/views/entry/entry.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BlockNewTripComponent } from './components/views/entry/block-new-trip/block-new-trip.component';

import { ViajesComponent } from './components/viajes/viajes.component';
import { BlockVisitComponent } from './components/views/entry/block-visit/block-visit.component';

import { BlockVisitComponent } from './components/views/entry/block-visit/block-visit.component'
import { ScheduleComponent } from './components/views/nannies/schedule/schedule.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FiltersPlanComponent } from './components/views/tourist-plan/filters-plan/filters-plan.component';
import { TitledescComponent } from './components/views/new-trip/titledesc/titledesc.component';
import { FormNewtripComponent } from './components/views/new-trip/form-newtrip/form-newtrip.component';

import { OtherTripsComponent } from './components/views/other-trips/other-trips.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerTravelComponent } from './components/views/tourist-plan/container-travel/container-travel.component';
import { SearchNanniesComponent } from './components/views/nannies/search-nannies/search-nannies.component';





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

    ViajesComponent,

    ScheduleComponent,

    FiltersPlanComponent,
    TitledescComponent,
    FormNewtripComponent,

    OtherTripsComponent,
    ModalComponent,

    ContainerTravelComponent,
    FormNewtripComponent,

    SearchNanniesComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule ,
    MatInputModule,

    MatIconModule, 
    HttpClientModule,
    ReactiveFormsModule

    HttpClientModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
