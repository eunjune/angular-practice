import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {PageToggleService} from "../../../share/page-toggle.service";

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  test = 1;

  min: number = 0
  sec: number = 0
  ms: number = 0

  @Input() inputData: string | undefined;

  timeInterval: any;

  constructor(
    private pageToggleService: PageToggleService
  ) {
  }

  ngOnInit(): void {

  }

  timeStart() {
    this.timeStop();
    this.timeInterval = setInterval(() => {
      this.ms++;
    },10)
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms=0;
  }

  // 부모 컴포넌트와 연결
/*  ngOnChanges(changes: SimpleChanges) {
    for(let propName in changes) {
      if(propName == 'inputData') {

        switch (changes[propName].currentValue) {
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
        }
      }
    }
  }*/

}
