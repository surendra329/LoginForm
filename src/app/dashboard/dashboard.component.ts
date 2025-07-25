import { Component, OnInit } from '@angular/core';
import { TiffinsComponent } from '../tiffins/tiffins.component';
import { RouterModule,Router } from '@angular/router';
import { AuthService } from '../service/auth-service.service';
@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService){}
  test(){
    console.log('tesdt');
    if(localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.authService.setUsername('Log Out');
      this.router.navigate(['./login']);
      return;
    }
  }
  ngOnInit(){
    localStorage.setItem('token','Active');
  }

  goToLunch() {
    this.router.navigate(['/lunch'], {
      queryParams: {
        meal: 'veg',
        time: 'noon'
      }
    });
  }
  

}
