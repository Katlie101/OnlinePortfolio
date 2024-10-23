import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, withComponentInputBinding } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HomePageComponent} from './components/home-page/home-page.component';
import { AboutMeComponent} from './components/about-me/about-me.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

NgModule ({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]

})

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), 
    HomePageComponent, AboutMeComponent, PortfolioPageComponent, ContactMeComponent, provideAnimationsAsync()]
  
};
