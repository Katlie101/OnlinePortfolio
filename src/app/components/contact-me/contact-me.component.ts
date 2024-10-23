import { Component, } from '@angular/core';
import { NotificationService } from '../../notification.service';



@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css',
  

})

export class ContactMeComponent {
  constructor(private notificationService: NotificationService) {}

  onSubmit () {
    this.notificationService.showNotification('Oopsie! Automated message is in maintenance. Kindly send a message manually.');

  }
}
