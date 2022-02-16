import { Component } from '@angular/core';

/*
* 클래스를 컴포넌트로 만듬
* */
@Component({
  selector: 'app-root', // 컴포넌트 태그 네임
  templateUrl: './app.component.html', //
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
}
