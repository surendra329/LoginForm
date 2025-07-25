import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lunch',
  imports: [CommonModule,RouterModule],
  templateUrl: './lunch.component.html',
  styleUrl: './lunch.component.scss'
})

export class LunchComponent {


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    })
  }
}
