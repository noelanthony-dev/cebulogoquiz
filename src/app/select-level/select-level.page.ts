import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.page.html',
  styleUrls: ['./select-level.page.scss'],
})
export class SelectLevelPage implements OnInit {

  levels: Array<any>;

  constructor() { }

  ngOnInit() {
    /* this.levels temporarily here . when webservice is available then get it from there*/
    this.levels = [
      {
        id: 1,
        title: 'Kan-anan',
        color: 'green',
      },
      {
        id: 2,
        title: 'Skwelahan',
        color: 'peach',
      }
    ];
  }

}
