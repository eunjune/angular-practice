import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  present: string = '';
  commandText: string ='';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  startTime(time:string) {
    this.present = time;
  }

  goClock() {
    this.router.navigateByUrl('/clock');
  }
}
