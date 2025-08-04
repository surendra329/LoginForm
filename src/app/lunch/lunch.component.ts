import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lunch',
  imports: [CommonModule,RouterModule],
  
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})

export class LunchComponent implements OnInit{


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    })
  }
}
