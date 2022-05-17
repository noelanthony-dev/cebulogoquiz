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
  input: string;
  status: boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const passedData = this.route.snapshot.queryParamMap;
    console.log('answers',typeof passedData.get('answers'));
    // this.logo = {
    //   answers: passedData.get('answers'),
    //   img: passedData.get('img'),
    //   description: passedData.get('description'),
    // };
    // console.log(this.logo);
    // console.log(this.status);
  }

  onChangeInput() {
    // console.log('thisinoput',this.input);
    // console.log('.logo.name',this.logo.answers);
    // this.logo.forEach(logoName => {
    //   if (this.input.toLowerCase() === this.logo.answers.toLowerCase()) {
    //     this.status = true;
    //     console.log('this.status!',this.status);
    //   };
    // });

  }

}
