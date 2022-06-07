/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
    },
    {
      id: 3,
      title: 'Tara Bukid!',
      color: 'peach'
    }
  ];

  progress =
  [
    [
      { status: false }, // 1 10 dove
      { status: false }, // 2 sol
      { status: false }, // 3 fatdoi
      { status: false }, // 4 coe
      { status: false }, // 5 tamp
      { status: false }, // 6 tagala
      { status: false }, // 7 orange
      { status: false }, // 8 Wingers
      { status: false }, // 9 Ricos
      { status: false }, // 10 persian
      { status: false }, // 11 choobi
      { status: false }, // 12 kuyaj
      { status: false }, // 12 ila
      { status: false }, // 13 sprokceteer
      { status: false }, // 13 uss
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
        description: 'Your favorite everyday bake, brew, blend and juice ritual • We are open daily from 8AM to 10PM',
        socmed: ['', 'https://www.facebook.com/cooeeph/', 'https://www.instagram.com/cooeeph/?hl=en'],
      },
      {
        answers: ['Tamp Cafe & Co.', 'Tamp', 'Tazza'],
        img: 'assets/images/1kananan/tamp.png',
        description: 'Offering unique flavors and dishes inspired by worldly eats, TAMP Cafe & Co. invites everyone to dive into a new gastronomic adventure, bringing in excitement to familiar flavors, comfort food, specialty coffee and delectable cakes & pastries.',
        socmed: ['', 'https://www.facebook.com/tampcafecebu/', 'https://www.instagram.com/tampcafecebu/?hl=en'],
      },
      {
        answers: ['Tagala Chicken Butterfly', 'Tagala'],
        img: 'assets/images/1kananan/tag.jpg',
        description: 'tagala chicken butterlfy',
        socmed: ['', 'https://www.facebook.com/tagalachicken/'],
      },
      {
        answers: ['Orange Brutus'],
        img: 'assets/images/1kananan/orangeb.jpg',
        description: 'Home of the best SIZZLING BURGER STEAK and FRESH FRUIT SHAKES!. A desire to make a statement in the food industry of Cebu, Philippines prompted two young entrepreneurs to start ORANGE BRUTUS in 1980.These entrepreneurs ventured into the FIRST HAMBURGER CHAIN in Cebu with the vision to revolutionize the food retail industry in the Visayas. This was a very bold step since hamburger was a relatively new food offered to the Filipinos at that time. ',
        socmed: ['https://orangebrutus.com/', 'https://www.facebook.com/orangebrutusofficialpage/', 'https://www.instagram.com/orangebrutusPH/'],
      },
      {
        answers: ['Wingers Unlimited', 'Wingers'],
        img: 'assets/images/1kananan/wingers.jpg',
        description: 'Eat all you can unlimited chicken. Flavors: Major Barbeque, Sgt. Garlic Pepper, Colonel Sweet Mustard, Private Plain, John Doe',
        socmed: ['', 'https://www.facebook.com/wingersunlimited/'],
      },
      {
        answers: ['Rico\'s Lechon', 'Ricos Lechon'],
        img: 'assets/images/1kananan/rico.jpg',
        description: 'Rico\’s Lechon is Crispy, Juicy and Flavorful! These three words best describe the flavor of the world-renowned roasted pig variety that’s popular in the Philippines.Covered with perfectly crispy skin, it can stand on its own without “sawsawan” as the juicy meat has been basked in a flavorful assortment of organic ingredients. It also comes in two flavors: original and spicy. Rico’s Lechon provides an experience like “home” with its contemporary classic interiors that shows “Old Cebu with a twist. We also house a Lechon Fulfillment Center for whole lechon orders and take out counter pasalubong. ',
        socmed: ['https://ricoslechon.com/', 'https://www.facebook.com/RicosLechonOfficial/', 'https://www.instagram.com/ricoslechonofficial/?hl=en'],
      },
      {
        answers: ['Persian Palate'],
        img: 'assets/images/1kananan/persian.png',
        description: 'Persian Palate is a restaurant in Cebu City that serves Mediterrean, Middle Eastern, and Indian cuisine. More than half of our menu is vegetarian with some being vegan friendly. Our Unli Veggie Buffet is every Friday and Saturday from 4PM to 8PM',
        socmed: ['https://persianpalate.ph/', 'https://www.facebook.com/PersianPalatePH/'],
      },
      {
        answers: ['Choobi Choobi', 'Choobi'],
        img: 'assets/images/1kananan/choobi.jpg',
        description: 'Choobi Choobi is a family oriented casual dining restaurant. Despite it\’s Korean sounding name, Choobi Choobi\’s menu courses are mostly Filipino Comfort Food. Choobi Choobi is derived from a Fookien word which means “to enjoy” that’s how our tag line “Lingaw lingaw Kaon!” originated. We grow our own shrimps that\’s why we have the freshest yet, cheapest shrimps in town. From our first branch in Parkmall Cebu which opened July, 2013; we have grown by the grace of God. To 16 branches located in key cities such as Bacolod, Iloilo, Cagayan de Oro, Davao and Metro Manila. We are still continuing to grow.',
        socmed: ['https://www.choobichoobi.com/', 'https://www.facebook.com/ChoobiChoobi/'],
      },
      {
        answers: ['Kuya J'],
        img: 'assets/images/1kananan/kuyaj.jpg',
        description: 'Kuya J Restaurant, formerly known as “Ang Kan-anan ni Kuya J,” started as a humble eatery along the streets of Cebu. But with Kuya J\’s undeniably delicious dishes, mouthwatering words of recommendation quickly spread into every Cebuanos’ palate. With that, Kuya J instantly became one of the well-loved restaurants in Cebu. Today, Kuya J continues to satisfy every Filipino\’s appetite nationwide. Using only the freshest ingredients available, Kuya J cooks up a storm of delicious Pinoy food in every corner of the Philippines.',
        socmed: ['https://www.kuyaj.ph/', 'https://www.facebook.com/KuyaJResto/', 'https://www.instagram.com/kuyajresto/?hl=en'],
      },
      {
        answers: ['Ila Puti'],
        img: 'assets/images/1kananan/ila.jpg',
        description: 'Ilaputi ~ Asian Soul FoodThis is our take on Asian comfort food. All your favorite dishes like you\’ve never seen before. Our menu is familiar yet entirely new, simple but full of surprises with huge portions and unique flavors. Each dish is made from scratch using only the best ingredients in the market. Local flavors, sauces and spices creatively combined to make a perfect meal.Not just good eats but a culinary adventure that will definitely be unforgettable. But don\’t take our word for it. Experience ilaputi for yourself.Drop by, chill out, drink up, have a taste and enjoy. Everyone\’s invited.',
        socmed: ['http://www.ilaputi.com/', 'https://www.facebook.com/ilaputi', 'https://www.instagram.com/ilaputi/?hl=en', 'https://twitter.com/ilaputi'],
      },
      {
        answers: ['Sprocketeer Cafe', 'Sprocketeer', 'Sprockets'],
        img: 'assets/images/1kananan/sprock.jpg',
        description: 'Sprockets Cafe is envisioned to become the creative hub for artists, photographers, writers, imaginative young people, innovative young professionals and entrepreneurs, a third venue (the first two being the home and the office) to chill and unwind. It will provide customers that ‘breathe of fresh air’, a place to breed creativity and inspiration.Sprockets Café encourages youthful freedom and boundless imagination. It offers milk tea, coffee and great comfort food.',
        socmed: ['', 'https://www.facebook.com/sprocketeercafe/', 'https://www.instagram.com/sprocketeercafe/?hl=en'],
      },
      {
        answers: ['Ultimate Sandwich Station', 'USS'],
        img: 'assets/images/1kananan/uss.jpg',
        description: 'Not your ordinary sandwich.',
        socmed: ['https://ultimatesandwichstation.business.site/', 'https://www.facebook.com/ultimatesandwichstation/', 'https://www.instagram.com/ultimatesandwichstation/'],
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
    },
    {
      logosId: 3,
      title: 'Tara Bukid',
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

  constructor(private storage: StorageService, private router: Router) {}

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

  async navigateToSelectLevel() {
    await this.populateStorage();
    this.router.navigateByUrl('/select-level');
  }
}
