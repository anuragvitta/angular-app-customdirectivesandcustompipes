import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Iaspirants } from '../interface';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboardcomponent',
  templateUrl: './dashboardcomponent.component.html',
  styleUrls: ['./dashboardcomponent.component.css']
})
export class DashboardcomponentComponent implements OnInit {
  @Output('update')
  change: EventEmitter<number> = new EventEmitter<number>();
 constructor() { }
aspirants: Iaspirants[];
  ngOnInit() {
    this.aspirants = this.getaspirants();
    console.log(this.aspirants);
  }

  getaspirants(): Iaspirants[] {
    return [
       {
        'name': 'anurag',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '90',
        'joindate': '07/23/1998'
      },
       {
        'name': 'hell',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '50',
        'joindate': '07/23/1998'
      },
     {
        'name': 'king',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '30',
        'joindate': '07/23/1998'
      },
       {
        'name': 'keee',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '70',
        'joindate': '07/23/1998'
      },
     {
        'name': 'miller',
        'branch': 'cse',
        'favlang': 'java',
        'percentage': '10',
        'joindate': '07/23/1998'
      },
      {
        'name': 'biller',
        'branch': 'mse',
        'favlang': 'halwva',
        'percentage': '100',
        'joindate': '07/23/0007'
      }
  ];
}
genalert(value){
  this.change.emit(value);
}
}
