import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
})
export class LevelPage implements OnInit {

  logoSet: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const logos = [
      {
      logosId: 1,
      title: 'Kan-anan',
      logo: [
        {
          name: '10 Dove Street',
          img: 'assets/images/1kananan/10dc.png',
          description: 'test'
        },
        {
          name: 'Samyupsalamat',
          img: 'assets/images/1kananan/samyupsalamat.jpg',
          description: 'test'
        },
        {
          name: 'Sols',
          img: 'assets/images/1kananan/sols.jpg',
          description: 'test'
        },
      ]
      },
      {
        logosId: 2,
        title: 'Skwelahan',
        logo: [
        {
          name: 'USC',
          img: 'assets/images/1kananan/10dc.png',
          description: 'test2'
        },
        {
          name: 'CIC',
          img: 'assets/images/1kananan/samyupsalamat.jpg',
          description: 'test2'
        },
      ]
      }
    ];
    const levelId = this.route.snapshot.queryParamMap.get('level');
    this.logoSet = logos.find(i => i.logosId === +levelId); // put + so that levelId turns into number
  }

}
