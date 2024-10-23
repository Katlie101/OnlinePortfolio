import { Component, NgModule, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { PortfolioPageComponent } from "./components/portfolio-page/portfolio-page.component";
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { NotificationService } from './notification.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, AboutMeComponent, PortfolioPageComponent, ContactMeComponent, RouterLink, FormsModule, MatSnackBarModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  
})

export class AppComponent {

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  
 
  ngOnChanges ( changes : SimpleChanges){
    console.log(changes);
  } 

  ngOnInit () {
    console.log("initialized");
  }

  constructor(private notificationService: NotificationService) {}

  onSubmit () {
    this.notificationService.showNotification('Oopsie! Automated message is in maintenance. Kindly send a message manually.');
}

}
