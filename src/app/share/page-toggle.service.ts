import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

/*
* 서비스 : 데이터 중개자
*
* 서비스를 찾는 방식
* - providers:[]에 서비스 정의
* - providedIn에
* - 검색 순서 : 컴포넌트 > 부모 컴포넌트 > 루트 컴포넌트 > 루트 모듈 > 하위 모듈 > 자신이 속하 모듈
*
* */
@Injectable(
  {
    providedIn: 'root'
  }
)
export class PageToggleService {

  public routingCount = 0;

  constructor(
    private router: Router
  ) { }

  goPage(target: string) {

    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
