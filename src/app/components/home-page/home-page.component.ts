import { Component } from '@angular/core';
import { AboutMeComponent } from "../about-me/about-me.component";
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AboutMeComponent, RouterLink, RouterLinkActive],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  

  
})
export class HomePageComponent {

  
}
