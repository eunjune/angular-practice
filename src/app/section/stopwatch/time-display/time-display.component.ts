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

  timeStart() {
    this.timeStop();
    this.timeInterval = setInterval(() => {

      if(this.ms >= 100) {
        this.ms = 0;
        this.sec++;
      }

      if(this.sec >= 60) {
        this.sec = 0;
        this.min++;
      }

      this.ms++;
    },10)
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms=0;
    this.sec=0;
    this.min=0;
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

  // 컴포넌트 속성 변경 감지
  ngOnChanges() {

  }

  // 컴포넌트 생성시(constructor). 한번만 호출
  ngOnInit() {

  }

  // 컴포넌트 변화 감지
  ngDoCheck() {

  }

  // 컴포넌트 태그 내의 컨텐츠들
  ngAfterContentInit() {

  }

  ngAfterContentChecked() {

  }

  // 컴포넌트 태그 랜더링
  ngAfterViewInit() {

  }

  ngAfterViewChecked() {

  }

  // 컴포넌트
  ngOnDestroy() {

  }


}
