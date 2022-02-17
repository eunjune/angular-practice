import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  present: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  startTime(time:string) {
    this.present = time;
  }
}