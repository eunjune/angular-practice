import { Component } from '@angular/core';

/*
* 클래스를 컴포넌트로 만듬
*
* function Component(constructorFn?: Function) {
*   // 클래스를 꾸며주는 로직들
*   return constructorFn // 클래스의 constructor
* }
* */
@Component({
  selector: 'app-root', // 컴포넌트 태그 네임
  templateUrl: './app.component.html', //
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
}
