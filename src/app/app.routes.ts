import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home-page', pathMatch: 'full'},
    { path: 'home-page', component: HomePageComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'portfolio-page', component: PortfolioPageComponent },
    { path: 'contact-me', component: ContactMeComponent},
   
    
    
];

