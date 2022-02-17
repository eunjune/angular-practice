import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  // 컴포넌트 이벤트를 발생시킬 수 있는
  @Output() clickEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    // 자식 컴포넌트에서 부모 컴포넌트로 전달
    this.clickEvent.emit('changes');
  }

  test ($event:MouseEvent) {
    console.log('test');
  }

}
