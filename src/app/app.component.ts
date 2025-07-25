import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './service/auth-service.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'food delivery';
  userLogin: string = localStorage.getItem('token') || 'Papa Rao';

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    console.log('🚀 AppComponent initialized');
    if (localStorage.getItem('token')) {
      this.userLogin = 'Papa Rao';
    }else {
      this.userLogin = 'Log Out';
    }

     this.authService.username$.subscribe(name => {
       console.log('Received username in AppComponent:', name);
      this.userLogin = name;
    },error=> {
      this.userLogin = 'Log Out';
      console.error('Error fetching username:', error);
    }); 

  }
  simulateLogin() {
    this.authService.setUsername('TestUser');
  }
}
