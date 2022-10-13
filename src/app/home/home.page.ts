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
      title: 'Tara Bukid!',
      color: 'peach'
    },
    {
      id: 3,
      title: 'Business Centers',
      color: 'peach'
    },
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
      { status: false }, // 13 ila
      { status: false }, // 14 dong
      { status: false }, // 15 uss
    ],
    [
      { status: false }, // 1 charlie
      { status: false }, // 2 lavie
      { status: false }, // 3 21
      { status: false }, // 4 gas
      { status: false }, // 5 soul
      { status: false }, // 6 lake
      { status: false }, // 7 lake
      { status: false }, // 8 flor
      { status: false }, // 9 mountainview
      { status: false }, // 10 sachiko
      { status: false }, // 11 servo
      { status: false }, // 12 nomad
      { status: false }, // 13 west 35
      { status: false }, // 14 lava
      { status: false }, // 15 balay
    ],
    [
      { status: false }, // 1 Oakridge
      { status: false }, // 2 btc
      { status: false }, // 3 greenery
      { status: false }, // 4 il corso
      { status: false }, // 5 sugbo merc
      { status: false }, // 6 88th
      { status: false }, // 7 gallery
      { status: false }, // 8 streetsc
      { status: false }, // 9 mahogany
      { status: false }, // 10 yellocube
      { status: false }, // 11 itpark
      { status: false }, // 12 grid
      { status: false }, // 13 crossroads
      { status: false }, // 14
      { status: false }, // 15
    ],
  ];

  /** socmed format [ 0- store website, 1 - fb , 2 - instagram , 3- twitter]*/
  logos = [
    {
    logosId: 1,
    title: 'Kan-anan',
    logo: [
      {
        answers: ['10 Dove Street', 'Dove Street', 'Ten Dove Street'],
        img: 'assets/images/1kananan/10dc.png',
        description: '10 Dove Street is a cozy cafe that serves comfort food and delectable baked goodies.',
        socmed: ['https://www.10dovestreet.com/', 'https://www.facebook.com/ten.dove.street', 'https://www.instagram.com/tendovestreet/', ''],
      },
      {
        answers: ['Sol\'s', 'Sols'],
        img: 'assets/images/1kananan/sols.jpg',
        description: 'Sol\’s Halo-Halo and Desserts is owned by entrepreneur Cathy Uy and her partner. The name itself originates from Ms. Cathy’s mom name Soledad whom she said has a great passion for cooking and making desserts. The business started on July 20, 2016, in Barangay Tisa, Cebu City. They mainly serve halo-halo then added with desserts like leche flan, macaroons, puto cheese, buko pandan, custard cake, maja blanca, and broken glass. Different beverages are also being sold.',
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
        description: 'Your favorite everyday bake, brew, blend and juice ritual',
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
        answers: ['Rico\'s Lechon', 'Ricos Lechon', 'Ricos', 'Rico\'s'],
        img: 'assets/images/1kananan/rico.jpg',
        description: 'Rico\’s Lechon is Crispy, Juicy and Flavorful! These three words best describe the flavor of the world-renowned roasted pig variety that’s popular in the Philippines.Covered with perfectly crispy skin, it can stand on its own without “sawsawan” as the juicy meat has been basked in a flavorful assortment of organic ingredients. It also comes in two flavors: original and spicy. Rico’s Lechon provides an experience like “home” with its contemporary classic interiors that shows “Old Cebu with a twist. We also house a Lechon Fulfillment Center for whole lechon orders and take out counter pasalubong. ',
        socmed: ['https://ricoslechon.com/', 'https://www.facebook.com/RicosLechonOfficial/', 'https://www.instagram.com/ricoslechonofficial/?hl=en'],
      },
      {
        answers: ['Persian Palate'],
        img: 'assets/images/1kananan/persian.png',
        description: 'Persian Palate is a restaurant in Cebu City that serves Mediterrean, Middle Eastern, and Indian cuisine. More than half of our menu is vegetarian with some being vegan friendly. Our Unli Veggie Buffet is every Friday and Saturday from 4PM to 8PM',
        socmed: ['https://persianpalate.ph/', 'https://www.facebook.com/PersianPalatePH/', 'https://www.instagram.com/persianpalate.ph/', 'https://twitter.com/persianpalateph'],
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
        answers: ['Dong Juan'],
        img: 'assets/images/1kananan/dong.png',
        description: 'Established in 2007, DONG JUAN was developed with the Cebu Market in mind. Cebuanos being a penchant for good food, reasonable prices and adequate serving',
        socmed: ['', 'https://www.facebook.com/dongjuanph/'],
      },
      {
        answers: ['Bo\'s Coffee', 'Bos', 'Bo\'s'],
        img: 'assets/images/1kananan/bo.jpg',
        description: 'We are homegrown. We put the spotlight on #PhilippineCoffee. Our Coffee Origins is a story of our culture. We make it our business to support local coffee farmers. We make it our mission to create a positive social impact by empowering social enterprises. It is at our pursuit to deliver unparalleled hospitality and a complete homegrown experience to our patrons. We are Bo\'s Coffee, #YourHomegrownBrew',
        socmed: ['https://www.boscoffee.com/', 'https://www.facebook.com/boscoffee/', 'https://www.instagram.com/boscoffee/?hl=en', 'https://twitter.com/boscoffee'],
      },
    ]
    },
    {
      logosId: 2,
      title: 'Tara Bukid',
      logo: [
      {
        answers: ['Charlie\'s Cup', 'Charlies Cup'],
        img: 'assets/images/2bukid/1charlie.jpg',
        description: 'Baby Friendly • PWD friendly • Pet friendly • Parking space available • Serving Hot & Cold beverages, All-Day-Breakfast, Snacks and Sweet Desserts • NO ENTRANCE FEE',
        socmed: ['', 'https://www.facebook.com/charliescupcebu/'],
      },
      {
        answers: ['La Vie in the Sky', 'La Vie'],
        img: 'assets/images/2bukid/2lavie.jpg',
        description: 'At La Vie Parisienne and La Vie in the Sky, we believe that a great dining experience is more than justgood food. We are devoted to giving our guests unique dining experience by serving only the finestselection of food and beverages and by providing them an awe-inspiring dining environment. Inspired by French bistros, our self-service restaurants offer a unique and personalized experience to our guests. This hallmark of ours provides guests the freedom to take their time and browse through our products with ease. We believe that a top-notch dining experience is one that is not only gastronomically satisfying but also engaging and fun.',
        socmed: ['https://lavieparisienne.ph/la-vie-in-the-sky', 'https://www.facebook.com/Lavieinthesky/', 'https://www.instagram.com/lavieinthesky/?hl=en'],
      },
      {
        answers: ['21 Kilometers Coffee', '21 km', '21 Kilometers'],
        img: 'assets/images/2bukid/3km.jpg',
        description: 'We are specialty coffee shop 25 Kilometers or 35 minutes away from city center of Cebu serving coffee and pastries with passion.',
        socmed: ['https://21-kilometers-coffee.business.site/', 'https://www.facebook.com/21kilometerscoffee'],
      },
      {
        answers: ['Gaslamp District'],
        img: 'assets/images/2bukid/4gas.jpg',
        description: 'Gaslamp District - the newest mountainside food haven, is essentially a food park/biker’s pitstop. It will also be another home for local food trucks and restaurants, and a new elevated family destination to make memories in.',
        socmed: ['https://gaslamp-district-busay.business.site/?m=true', 'https://www.facebook.com/gaslampdistrictbusay', 'https://www.instagram.com/gaslampdistrictbusay/'],
      },
      {
        answers: ['Soul Sierra'],
        img: 'assets/images/2bukid/5soul.png',
        description: 'Mindful Eats at The Garden Restaurant, Wholesome Activities, Wellness & Creativity, Earth Focused.',
        socmed: ['https://www.eventbrite.com/o/soul-sierra-23450214428?fbclid=IwAR3bkenkkYJMURvtUBKo1NtVxOY6lEtJQ5bq41RyKWNWPkkbW-Iou63ikBk', 'https://www.facebook.com/soulsierra', 'https://www.instagram.com/soulsierra/'],
      },
      {
        answers: ['Lakeview Le Jardin', 'Lakeview'],
        img: 'assets/images/2bukid/6lake.jpg',
        description: 'Garden-Restaurant-Cafe situated in km 30, TCH',
        socmed: ['', 'https://www.facebook.com/lakeviewlejardincebu', 'https://www.instagram.com/lakeviewlejardin/?hl=en'],
      },
      {
        answers: ['Top of Cebu', 'Top'],
        img: 'assets/images/2bukid/7tops.png',
        description: '',
        socmed: ['', 'https://www.facebook.com/topofcebu/'],
      },
      {
        answers: ['Florentino\'s Art Space'],
        img: 'assets/images/2bukid/8flor.png',
        description: 'Florentino’s Art Space is a local art hub. It is an avenue for visual arts in Cebu, a place where you can create, exhibit and explore art. It is comprised of an art gallery, outdoor garden museum, paint studio and a café. ',
        socmed: ['', 'https://www.facebook.com/FlorentinosArtSpace'],
      },
      {
        answers: ['Mountain View Nature\'s Park', 'Mountain View'],
        img: 'assets/images/2bukid/9mview.jpg',
        description: '',
        socmed: ['', 'https://www.facebook.com/MountainViewNaturesPark/', 'https://www.instagram.com/mt.viewnaturespark/'],
      },
      {
        answers: ['Sachiko\'s Little Kyoto', 'Sachikos Little Kyoto'],
        img: 'assets/images/2bukid/10sachiko.png',
        description: '',
        socmed: ['', 'https://www.facebook.com/sachikoslittlekyoto/'],
      },
      {
        answers: ['Outback Servo'],
        img: 'assets/images/2bukid/11servo.png',
        description: ' ',
        socmed: ['', 'https://www.facebook.com/OutbackServo/', 'https://www.instagram.com/outbackservo/'],
      },
      {
        answers: ['Nomad\'s Refuge','Nomads Refuge'],
        img: 'assets/images/2bukid/12nomad.jpg',
        description: 'Nomad\'s Refuge is a restaurant in the beautiful mountain area called Cantipla in Cebu City. Dedicated to providing delicious food with a beautiful view, Nomad\'s also sources what it can from local cantipla farmers.',
        socmed: ['', 'https://www.facebook.com/nomadsrefuge', 'https://www.instagram.com/nomadsrefuge/'],
      },
      {
        answers: ['West 35 Eco Mountain Resort', 'West 35'],
        img: 'assets/images/2bukid/13west.png',
        description: 'WEST 35 is an Eco Mountain Resort that aims to help in preserving and sustaining the diversity of the world’s natural environments. It boasts of lush vegetation, a wide variety of insects, birds and foliage endemic.',
        socmed: ['', 'https://www.facebook.com/West35EcoMountain', 'https://www.instagram.com/west35ecomountainresort/'],
      },
      {
        answers: ['Lava Mountain River Farm'],
        img: 'assets/images/2bukid/14lava.png',
        description: 'A 4-hectare agri-tourism farm and private villas located beside the Mananga River in the valley of the mountains of Brgy. Bonbon in Cebu City.',
        socmed: ['https://www.lavamountainriverfarm.com/', 'https://www.facebook.com/LavaMountainRiverFarm/'],
      },
      {
        answers: ['Balay Sa Busay'],
        img: 'assets/images/2bukid/15balay.jpg',
        description: 'Find us at Cebu Tops Road in Brgy. Busay, Cebu City.',
        socmed: ['https://linkin.bio/balaysabusay', 'https://www.facebook.com/BalaySaBusay/', 'https://www.instagram.com/balaysabusay/'],
      },
    ]
    },
    {
      logosId: 3,
      title: 'Food park man siguro',
      logo: [
      {
        answers: ['Oakridge Business Park', 'Oakridge'],
        img: 'assets/images/3park/1oak.jpg',
        description: 'Cebu\'s most exclusive business address with a stylish mix of event, lifestyle and office spaces. Nestled in one of Cebu\'s upscale districts is a hidden gem where business meets pleasure, where landscaping progresses a norm, where businesses grow. Oakridge Business Park is ideally located at the heart of A.S. Fortuna Street in Banilad, a main gateway that connects Cebu City and Mandaue City.',
        socmed: ['https://www.oakridge.com.ph/', 'https://www.facebook.com/OakridgeBusinessPark', 'https://www.instagram.com/oakridgebusinesspark_official/'],
      },
      {
        answers: ['Banilad Town Centre', 'Banilad Town Center', 'BTC'],
        img: 'assets/images/3park/2btc.jpg',
        description: 'Banilad Town Centre is a bike- and pet- friendly zone, one of the very few in Cebu. Enjoy the BTC style of living with a variety of shopping and dining options along the lifestyle strip to cater to your every need and whim. Banilad Town Centre is located along Gov. Cuenco Ave. and is open daily.',
        socmed: ['', 'https://www.facebook.com/btccebu', 'https://www.instagram.com/btccebu/', 'https://twitter.com/btccebu'],
      },
      {
        answers: ['The Greenery', 'Greenery'],
        img: 'assets/images/3park/3green.jpg',
        description: 'The Greneery Cebu is a commercial building located at The Greenery Building, Pope John Paul II Ave., Kasambagan, Cebu City',
        socmed: ['', 'https://www.facebook.com/thegreenerycebuofficial'],
      },
      {
        answers: ['IL Corso'],
        img: 'assets/images/3park/4ilc.jpg',
        description: 'IL Corso is the Lifemall of Filinvest in Cebu. A redefined lifestyle destination for conventional shopping and specialty dining with the panoramic view of the sea and open spaces.',
        socmed: ['', 'https://www.facebook.com/ILCorsoFilinvestLifemalls'],
      },
      {
        answers: ['Sugbo Mercado'],
        img: 'assets/images/3park/5sugbomercado.jpg',
        description: 'Sugb Mercado is a venue for startup food entrepreneurs to incubate their food ideas while being guided through guidelines to become full blown entrepreneurs to realize their vision in becoming a brand. Thorugh the years we have been a food destination for locals and tourists as a showcase to the Cebuano food culture. We aim to uplift not only the food industry but the entrepreneurial spirit of the Cebuanos.',
        socmed: ['http://www.sugbomercado.com/', 'https://www.facebook.com/SugboMercado', 'https://www.instagram.com/sugbomercado/', 'https://twitter.com/sugbomercado'],
      },
      {
        answers: ['88th Avenue'],
        img: 'assets/images/3park/688.jpg',
        description: '88th Avenue, Cebu’s first true luxury lifestyle development. Rising in the heart of the city, we set our self apart from the many other developments with our unique concept of elevated upscale living, combining both residential and commercial space.',
        socmed: ['', 'https://www.facebook.com/88thavenuecebu'],
      },
      {
        answers: ['The Gallery'],
        img: 'assets/images/3park/7gal.png',
        description: '88th Avenue, Cebu’s first true luxury lifestyle development. Rising in the heart of the city, we set our self apart from the many other developments with our unique concept of elevated upscale living, combining both residential and commercial space.',
        socmed: ['', 'https://www.facebook.com/88thavenuecebu'],
      },
      {
        answers: ['Streetscape'],
        img: 'assets/images/3park/8street.png',
        description: 'A new lifestyle destination in Banilad, offering first-in-Cebu stores, restaurants, Gym and services.',
        socmed: ['https://streetscape.com.ph/', 'https://www.facebook.com/streetscapecebu/', 'https://www.instagram.com/streetscapecebu/'],
      },
      {
        answers: ['Mahogany Place'],
        img: 'assets/images/3park/9mahogany.png',
        description: '',
        socmed: ['', 'https://www.facebook.com/mahoganyplacecebu'],
      },
      {
        answers: ['YelloCube Food Hub', 'YelloCube', 'Yello Cube'],
        img: 'assets/images/3park/10yello.jpg',
        description: 'Yello Cube is a food park that\'s going to be the first and finest gallery for food innovators and enthusiasts in Cebu City creating a wholesome and fairly priced and ethnically diverse food options to the public. ',
        socmed: ['', 'https://www.facebook.com/YelloCubeCebu', 'https://www.instagram.com/yellocubeph/?hl=en'],
      },
      {
        answers: ['Cebu I.T. Park', 'IT Park', 'Cebu Business Park'],
        img: 'assets/images/3park/11it.jpg',
        description: 'Cebu I.T. Park vibrantly rises over the former Lahug Airport, now one of the most prime areas in Cebu. A pioneer in Cebu’s I.T. industry, the integrated, mixed-use development obtained PEZA accreditation as an I.T. Park in 2000—the first in the Visayas and Mindanao. Today, this 27-hectare global gateway is home to a diverse mix of international and local software research and development companies, BPOs, and contact centers, which bring in millions of pesos in investments and employment to thousands of people.',
        socmed: ['https://www.cebuitpark.com/', 'https://www.facebook.com/CebuITParkOfficial', 'https://www.instagram.com/cebuitpark/'],
      },
      {
        answers: ['Grid'],
        img: 'assets/images/3park/12grid.png',
        description: 'Grid provide clean, safe and affordable homes for students and professionals. Offering a great environment for studying, relaxing, and socializing .',
        socmed: ['', 'https://www.facebook.com/gridfoodpark'],
      },
      {
        answers: ['Crossroads'],
        img: 'assets/images/3park/13cross.jpg',
        description: 'Crossroads is a lifestyle district where things come alive through community and collaboration. Featuring a unique selection of dining, retail and service establishments, Crossroads is a homegrown collective for the Cebuano community.',
        socmed: ['https://crossroadscebu.com/', 'https://www.facebook.com/crossroadscebu', 'https://www.instagram.com/crossroadscebu/'],
      },
      {
        answers: ['Vibo Place / Axis Entertainment Avenue', 'Vibo', 'Axis'],
        img: 'assets/images/3park/14vibo.jpg',
        description: 'your uptown destination for a variety of delicious dining options',
        socmed: ['https://viboplace.com/', 'https://www.facebook.com/ViboPlace', 'https://www.instagram.com/axisentertainmentavenue/'],
      },
      {
        answers: ['Taft East Gate', 'Taft'],
        img: 'assets/images/3park/15taft.jpg',
        description: 'All that is essential to a comfortable and sustainable lifestyle in one desirable address. ______\’ vision is executed through its signature MicroTownship concept, the standard which ensures that ______\'s projects are placed only on transit-oriented and strategic locations. This is perfectly captured in ______, where key points in the community are literally just a few steps away from each other. Saved from the hassles of commuting or waiting, you could be beating the daily grind one minute, and having a ball the next.',
        socmed: ['https://www.taftproperties.com.ph/project/east-gate/', 'https://www.facebook.com/tafteastgatebytaft/about'],
      },
    ]
    },
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


/*
NOTES: When adding a logo, add a line in progress and in logos
to be put in later
hardmode kan-anan
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

*/
