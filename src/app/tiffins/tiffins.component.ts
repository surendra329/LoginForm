import { Component } from '@angular/core';
import {ServiceService} from '../services/service.service';
@Component({
  selector: 'app-tiffins',
  imports: [],
  templateUrl: './tiffins.component.html',
  styleUrl: './tiffins.component.scss'
})
export class TiffinsComponent {
 
constructor(private service:ServiceService) {};
  ngOnInit() {
    this.service.getUsers().subscribe((data) => {
          console.log(data);
        }, (error) => {
          console.error('Error fetching users:', error);
        });
    }
}
