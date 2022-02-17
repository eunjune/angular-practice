import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  test = 1;

  @Input() inputData: string | undefined;

  constructor() {
    console.log(this.inputData);
  }

  ngOnInit(): void {

  }

  // 부모 컴포넌트와 연결
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

  }

}
