import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Logo } from '../models/logo.model';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.page.html',
  styleUrls: ['./logo.page.scss'],
})
export class LogoPage implements OnInit {

  logo: Logo;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const passedData = this.route.snapshot.queryParamMap;
    this.logo = {
      name: passedData.get('name'),
      img: passedData.get('img'),
      description: passedData.get('description'),
    };
    console.log(this.logo);
  }

}
