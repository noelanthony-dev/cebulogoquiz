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

  progress =
  [
    [
      { status: false }, // dove
      { status: false }, // sols
      { status: false }, // fatdoi
      { status: false }, // cooee
      { status: false }, // tamp
      { status: false }, // tagala
    ],
    [
      { status: false }, // usc
      { status: false }, // cic
    ]
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
        description: '10 Dove Street is a cozy cafe that serves comfort food and delectable baked goodies.' +
        'Mrs. Marisol Verallo started her love for baking after her marriage to Lee in the year 1973 in his hometown in Bogo, Cebu.' +
        'From there, she started selling to friends and relatives her delectable cakes and pastries which was known for using only quality ingredients.' +
        'Soon after, the young couple moved to Cebu City where Marisol\’s home-baked goods became an instant hit with the Cebuanos.' +
        'Encouraged by her family, Marisol decided to open a quaint cake tucked in a small portion of her home in Sto. Niño Village.' +
        'Aptly naming it 10 Dove Street, after her home address, the cafe became known for its affordable and hearty meals, personalized service and cozy ambiance.' +
        'Through word of mouth, the popularity of 10 Dove Street grew and people would line up for a taste of her home crafted meals and made-to-order cakes and pastries.' +
        'And on 2014, 10 Dove Street decided to move to a new home in order to open its doors to more people,\n while ensuring to maintain the traditions that Mrs. Marisol Verallo has created a combination of cozy ambiance, good food, and a perfect slice of heaven.',
        socmed: ['https://www.10dovestreet.com/', 'https://www.facebook.com/ten.dove.street', 'https://www.instagram.com/tendovestreet/', ''],
      },
      {
        answers: ['Sol\'s', 'Sols'],
        img: 'assets/images/1kananan/sols.jpg',
        description: 'Sol\’s Halo-Halo and Desserts is owned by entrepreneur Cathy Uy and her partner. The name itself originates from Ms. Cathy’s mom name Soledad whom she said has a great passion for cooking and making desserts. The business started on July 20, 2016, in Barangay Tisa, Cebu City. It soon clicked to Cebuanos\’ palettes that they opened its first branch at G/F Skyrise 1 IT Park on March 30, 2017. An interested entrepreneur contracted them for a franchise at Sign in Restobar in Carcar City which opened last July 7, 2017. They mainly serve halo-halo then added with desserts like leche flan, macaroons, puto cheese, buko pandan, custard cake, maja blanca, and broken glass. Different beverages are also being sold.',
        socmed: ['', 'https://www.facebook.com/SolmateOfficial'],
      },
      {
        answers: ['Fat Dois', 'fatdois'],
        img: 'assets/images/1kananan/fatdo.png',
        description: 'To all the cheese lovers out there, this is our haven. Fat Dois‘ main dishes are simple which consists of cheese and ribs, cheese and chicken (comes in spicy, barbecue, or garlic soy flavors — pops of boneless chicken are drenched in three kinds of cheese), and the famous spicy noodles with spam and cheese which will make your jaws drop with its size. The dishes are served and heated with portable stoves so you could see that cheese boiling right in front of you. You can dip, wrap, and pull up the cheese making the dining experience more fun and exciting.',
        socmed: ['', 'https://www.facebook.com/fatdoiscebu', 'https://www.instagram.com/fatdoiscebu/?hl=en'],
      },
      {
        answers: ['Cooee'],
        img: 'assets/images/1kananan/coe.jpg',
        description: 'cooee desc',
      },
      {
        answers: ['Tamp Cafe & Co.', 'Tamp', 'Tazza'],
        img: 'assets/images/1kananan/tamp.png',
        description: 'Tamp Cafe & Co',
      },
      {
        answers: ['Tagala Chicken Butterfly', 'Tagala'],
        img: 'assets/images/1kananan/tag.jpg',
        description: 'tagala chicken butterlfy',
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
    this.loadProgressData();
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

  /** load progressData */
  /** loads data from IndexedDB */
  async loadProgressData() {
    await this.storage.getData('progress').subscribe(res => {
      if (!res) {
        this.storage.addData('progress', this.progress);
      }
    });
  }

  // async removeItem(index) {
  //   this.storage.removeItem(index);
  //   this.listdata.splice(index,1);
  // }
}
