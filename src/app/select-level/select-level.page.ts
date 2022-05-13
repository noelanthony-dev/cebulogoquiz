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
    this.levels = [
      {
        title: 'Kan-anan',
        logos: [
          {
            title: '10 Dove Street',
            img: '1kananan/10dc.png'
          },
          {
            title: 'Samyupsalamat',
            img: '1kananan/samyupsalamat.jpg'
          },
        ]
      },
      {
        title: 'Skwelahan'
      }
    ];
  }

}
