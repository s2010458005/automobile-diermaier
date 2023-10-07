import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { DesktopMenuComponent } from './components/desktop-menu/desktop-menu.component';
import { ServiceComponent } from './components/service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DataSecurityComponent } from './components/data-security/data-security.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutMeComponent,
    ContactComponent,
    HomeComponent,
    CarsComponent,
    ImpressumComponent,
    MobileMenuComponent,
    DesktopMenuComponent,
    ServiceComponent,
    DataSecurityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    CdkAccordionModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
