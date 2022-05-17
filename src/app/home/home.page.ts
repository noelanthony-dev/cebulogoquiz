/* eslint-disable max-len */
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

  /** socmed format [ 0- store website, 1 - fb , 2 - instagram , 3- twitter]*/
  logos = [
    {
    logosId: 1,
    title: 'Kan-anan',
    logo: [
      {
        answers: ['10 Dove Street', 'Dove Street'],
        img: 'assets/images/1kananan/10dc.png',
        description: '10 Dove Street is a cozy cafe that serves comfort food and delectable baked goodies.\n\n' +
        'Mrs. Marisol Verallo started her love for baking after her marriage to Lee in the year 1973 in his hometown in Bogo, Cebu.\n' +
        'From there, she started selling to friends and relatives her delectable cakes and pastries which was known for using only quality ingredients.\n' +
        'Soon after, the young couple moved to Cebu City where Marisol\’s home-baked goods became an instant hit with the Cebuanos.\n\n' +
        'Encouraged by her family, Marisol decided to open a quaint cake tucked in a small portion of her home in Sto. Niño Village.\n' +
        'Aptly naming it 10 Dove Street, after her home address, the cafe became known for its affordable and hearty meals, personalized service and cozy ambiance.\n\n' +
        'Through word of mouth, the popularity of 10 Dove Street grew and people would line up for a taste of her home crafted meals and made-to-order cakes and pastries.\n\n' +
        'And on 2014, 10 Dove Street decided to move to a new home in order to open its doors to more people,\n while ensuring to maintain the traditions that Mrs. Marisol Verallo has created a combination of cozy ambiance, good food, and a perfect slice of heaven.',
        socmed: ['https://www.10dovestreet.com/', 'https://www.facebook.com/ten.dove.street', 'https://www.instagram.com/tendovestreet/', '']
      },
      {
        answers: ['Sol\'s', 'Sols'],
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
        answers: ['Tamp Cafe & Co.', 'Tamp', 'Tazza'],
        img: 'assets/images/1kananan/tamp.png',
        description: 'Tamp Cafe & Co'
      },
      {
        answers: ['Tagala Chicken Butterfly', 'Tagala'],
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
