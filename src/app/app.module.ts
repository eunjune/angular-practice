import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {SectionModule} from "./section/section.module";

/*
* 데코레이터 : 클래스를 모듈로 만들어줌
*
* */
@NgModule({
  // 일종의 DI. 컴포넌트들의 의존성 관리
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    LayoutModule,
    SectionModule
  ],

  exports: [
    AppComponent
  ],
  providers: [], // 서비스 로직
  bootstrap: [AppComponent] // 실행할 컴포넌트 지정
})
export class AppModule { }
