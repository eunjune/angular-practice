import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {interval, map} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  timeString: any;

  constructor(
    private router: Router
  ) {
    interval(1000)
      .pipe(map(()=>{
        return moment().format('YYYY-MM-DD HH:mm:ss')
      }))
      .subscribe(data => {
        this.timeString = data;
      })
  }

  ngOnInit(): void {
  }

  goStopWatch() {

    this.router.navigateByUrl('/stopwatch')
  }
}
