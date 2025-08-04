import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tiffins',
  imports: [CommonModule,FormsModule],
  templateUrl: './tiffins.component.html',
  styleUrl: './tiffins.component.scss'
})
export class TiffinsComponent implements OnInit{
  list:any;
constructor(private service:ServiceService) {};
  ngOnInit() {
    this.service.getUsers(10).subscribe(data => {
      console.log(data);
      this.list = data?.users;
    });
    }
}
