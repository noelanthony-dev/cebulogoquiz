import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Logo } from '../models/logo.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.page.html',
  styleUrls: ['./logo.page.scss'],
})
export class LogoPage implements OnInit {

  logo: Logo;
  input: string;
  status: boolean;
  logoId: number;
  levelId: number;

  constructor(
    private route: ActivatedRoute,
    private storage: StorageService,
  ) { }

  ngOnInit() {
    this.levelId = +this.route.snapshot.paramMap.get('levelId');
    this.logoId = +this.route.snapshot.paramMap.get('logoId');
    this.loadLogos();
    // this.logo = {
    //   answers: passedData.get('answers'),
    //   img: passedData.get('img'),
    //   description: passedData.get('description'),
    // };
    // console.log(this.logo);
    // console.log(this.status);
  }

  onChangeInput() {
    console.log('thisinoput',this.input);
    console.log('.logo.name',this.logo.answers);
    this.logo.answers.forEach(logoName => {
      if (this.input.toLowerCase() === logoName.toLowerCase()) {
        this.status = true;
        console.log('this.status!',this.status);
      };
    });
  }

  /** loadData */
  /** loads data from IndexedDB */
  loadLogos() {
    this.storage.getData('logos').subscribe(res => {
      if (res) {
      this.logo = res[0].find(i => i.logosId === this.levelId).logo[this.logoId];
      console.log('logo', this.logo);
      }
    });
  }

}
