import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryformComponent } from './country/countryform/countryform.component';
import { CountrylistComponent } from './country/countrylist/countrylist.component';
import { CountryDetailsComponent } from './country/country-details/country-details.component';
import { ProvincelistComponent } from './province/provincelist/provincelist.component';
import { ProvinceFormComponent } from './province/province-form/province-form.component';
import { CityFormComponent } from './city/city-form/city-form.component';
import { CityListComponent } from './city/city-list/city-list.component';
import { CityDetailsComponent } from './city/city-details/city-details.component';
import { ProvinceDetailsComponent } from './province/province-details/province-details.component';
import { UniversityDetailsComponent } from './university/university-details/university-details.component';
import { UniversityFormComponent } from './university/university-form/university-form.component';
import { UniversityListComponent } from './university/university-list/university-list.component';
import { ProgramListComponent } from './program/program-list/program-list.component';
import { SemesterListComponent } from './program/semester-list/semester-list.component';
import { SemesterFormComponent } from './program/semester-form/semester-form.component';
import { ProgramFormComponent } from './program/program-form/program-form.component';
import { ProgramDetailsComponent } from './program/program-details/program-details.component';
import { SemesterListFullComponent } from './program/semester-list-full/semester-list-full.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryformComponent,
    CountrylistComponent,
    CountryDetailsComponent,
    ProvincelistComponent,
    ProvinceFormComponent,
    CityFormComponent,
    CityListComponent,
    CityDetailsComponent,
    ProvinceDetailsComponent,
    UniversityDetailsComponent,
    UniversityFormComponent,
    UniversityListComponent,
    ProgramListComponent,
    SemesterListComponent,
    SemesterFormComponent,
    ProgramFormComponent,
    ProgramDetailsComponent,
    SemesterListFullComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'country', component: CountrylistComponent, pathMatch: 'full'},
      { path: 'country/:id', component: CountryDetailsComponent, pathMatch: 'full'},
      { path: 'country/provinces/:id', component: ProvincelistComponent, pathMatch: 'full'},
      { path: 'country/provinces/add/:id', component: ProvinceFormComponent, pathMatch: 'full'},
      { path: 'province/:id', component: ProvinceDetailsComponent, pathMatch: 'full'},
      { path: 'province/cities/:id', component: CityListComponent, pathMatch: 'full'},
      { path: 'province/cities/add/:id', component: CityFormComponent, pathMatch: 'full'},
      { path: 'city/:id', component: CityDetailsComponent, pathMatch: 'full'},
      { path: 'city/universities/:id', component: UniversityListComponent, pathMatch: 'full'},
      { path: 'city/universities/add/:id', component: UniversityFormComponent, pathMatch: 'full'},
      { path: 'university/:id', component: UniversityDetailsComponent, pathMatch: 'full'},
      { path: 'university/programs/:id', component: ProgramListComponent, pathMatch: 'full'},
      { path: 'university/programs/add/:id', component: ProgramFormComponent, pathMatch: 'full'},
      { path: 'program/:id', component: ProgramDetailsComponent, pathMatch: 'full'},
      { path: 'program/semesters/:id', component: SemesterListComponent, pathMatch: 'full'},
      { path: 'program/semesters/add/:id', component: SemesterFormComponent, pathMatch: 'full'},
      { path: 'semesters', component: SemesterListFullComponent, pathMatch: 'full'},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
