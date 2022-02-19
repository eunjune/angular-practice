import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PageToggleService} from "../../share/page-toggle.service";

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  providers: [
    PageToggleService // 서비스 정의. 이렇게 해주면 자식 컴포넌트들도 이걸 쓸 수 있음
  ]
})
export class StopwatchComponent implements OnInit {
  present: string = '';
  commandText: string ='';

  constructor(
    private router: Router,
    private pageToggleService: PageToggleService
  ) { }

  ngOnInit(): void {
  }

  startTime(time:string) {
    this.present = time;
  }

  goClock() {
    this.pageToggleService.goPage('/clock');
  }
}
