import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.levelId = +this.route.snapshot.paramMap.get('levelId');
    this.logoId = +this.route.snapshot.paramMap.get('logoId');
    this.getProgressStatus();
    this.loadLogos();
  }

  async getProgressStatus() {
    await this.storage.getData('progress').subscribe(res => {
      this.status = res[0][this.levelId-1][this.logoId].status;
    });
  }

  onChangeInput() {
    this.logo.answers.forEach(logoName => {
      if (this.input.toLowerCase().trim() === logoName.toLowerCase()) {
        this.status = true;
        this.presentToast();
        this.logo.status = true;
        this.storage.updateProgress(this.levelId, this.logoId);
      };
    });
  }

  /** loadData */
  /** loads data from IndexedDB */
  loadLogos() {
    this.storage.getData('logos').subscribe(res => {
      if (res) {
      this.logo = res[0].find(i => i.logosId === this.levelId).logo[this.logoId];
    }
    });
  }

  /** this method shows the 'You got it! pop-up */
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You got it!',
      duration: 1500,
      keyboardClose: true,
      position: 'middle',
      icon: 'checkmark-outline',
      color: 'success',
      cssClass: 'success-toast',
    });
    toast.present();
  }

  /* goToUrl */
  /* for social media, redirect user to url */
  /*  [ 0- store website, 1 - fb , 2 - instagram , 3- twitter] */
  goToUrl(tag: number) {
    window.open(this.logo.socmed[tag], '_blank');
  }

}
