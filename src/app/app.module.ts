import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HelloComponent} from "./hello/hello.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/time-display/time-display.component';
import { ButtonsComponent } from './section/buttons/buttons.component';

/*
* 데코레이터 : 클래스를 모듈로 만들어줌
*
* */
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    TimeDisplayComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], // 서비스 로직
  bootstrap: [AppComponent] // 실행할 컴포넌트 지정
})
export class AppModule { }
