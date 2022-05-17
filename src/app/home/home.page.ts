import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  levels = [
    {
      id: 1,
      title: 'Kan-anan',
      color: 'green',
    },
    {
      id: 2,
      title: 'Skwelahan',
      color: 'peach'
    }
  ];

  logos = [
    {
    logosId: 1,
    title: 'Kan-anan',
    logo: [
      {
        answers: ['10 Dove Street', 'Dove Street'],
        img: 'assets/images/1kananan/10dc.png',
        description: '10 dove desc'
      },
      {
        answers: ['Samyupsalamat'],
        img: 'assets/images/1kananan/samyupsalamat.jpg',
        description: 'samyupsalamat desc'
      },
      {
        answers: ['Sols', 'Sol\'s'],
        img: 'assets/images/1kananan/sols.jpg',
        description: 'sols desc'
      },
      {
        answers: ['Fat Dois', 'fatdois'],
        img: 'assets/images/1kananan/fatdo.png',
        description: 'fat dois desc'
      },
      {
        answers: ['Cooee'],
        img: 'assets/images/1kananan/coe.jpg',
        description: 'cooee desc'
      },
      {
        answers: ['Tamp', 'Tazza'],
        img: 'assets/images/1kananan/tamp.png',
        description: 'Tamp Cafe & Co'
      },
      {
        answers: ['Tagala'],
        img: 'assets/images/1kananan/tag.jpg',
        description: 'tagala chicken butterlfy'
      },
    ]
    },
    {
      logosId: 2,
      title: 'Skwelahan',
      logo: [
      {
        answers: 'USC',
        img: 'assets/images/1kananan/10dc.png',
        description: 'test2'
      },
      {
        answers: 'CIC',
        img: 'assets/images/1kananan/samyupsalamat.jpg',
        description: 'test2'
      },
    ]
    }
  ];

  constructor(private storage: StorageService) {
    this.populateStorage();
  }


  populateStorage() {
    this.loadLevelsData();
    this.loadLogosData();
  }

  /** load levelsData */
  /** loads data from IndexedDB */
  async loadLevelsData() {
    await this.storage.getData('levels').subscribe(res => {
      if (!res) {
        this.storage.addData('levels', this.levels);
      }
    });
  }

  /** load logosData */
  /** loads data from IndexedDB */
  async loadLogosData() {
    this.storage.getData('logos').subscribe(res => {
      if (!res) {
        this.storage.addData('logos', this.logos);
      }
    });
  }

  // async removeItem(index) {
  //   this.storage.removeItem(index);
  //   this.listdata.splice(index,1);
  // }
}
