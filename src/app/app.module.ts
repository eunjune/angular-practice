import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HelloComponent} from "./hello/hello.component";

/*
* 데코레이터 : 클래스를 모듈로 만들어줌
*
* */
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], // 서비스 로직
  bootstrap: [AppComponent] // 실행할 컴포넌트 지정
})
export class AppModule { }
