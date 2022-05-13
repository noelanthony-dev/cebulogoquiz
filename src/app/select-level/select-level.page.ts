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
        title: 'Kan-anan',
        color: 'green',
        logos: [
          {
            name: '10 Dove Street',
            img: '1kananan/10dc.png',
            description: 'test'
          },
          {
            name: 'Samyupsalamat',
            img: '1kananan/samyupsalamat.jpg',
            description: 'test'
          },
        ]
      },
      {
        title: 'Skwelahan',
        color: 'peach',
      }
    ];
  }

}
