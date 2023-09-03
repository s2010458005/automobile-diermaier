import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarsComponent } from './components/cars/cars.component';
import { HomeComponent } from './components/home/home.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { ServiceComponent } from './components/service/service.component';
import { DataSecurityComponent } from './components/data-security/data-security.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fahrzeuge', component: CarsComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'über-mich', component: AboutMeComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DataSecurityComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
