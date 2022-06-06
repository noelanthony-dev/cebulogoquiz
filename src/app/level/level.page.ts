import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss'],
})
export class LevelPage implements OnInit {

  logoSet: any;
  levelId: number;
  progress: any;
  completedLogosProgress: any;

  constructor(
    private storage: StorageService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.levelId = +this.route.snapshot.paramMap.get('id');
    this.loadLogosData();
    console.log('levelId', this.levelId);
  }

  /** loadLogosData */
  /** loads logo data from IndexedDB */
   loadLogosData() {
     this.storage.getData('logos').subscribe(res => {
        if (res) {
        this.logoSet = res[0];
        this.logoSet = this.logoSet.find(i => i.logosId === this.levelId);
        console.log('logoset', this.logoSet);
      }
    });
  }

  /** loadProgressData */
  /** loads progress data from IndexedDB */
  loadProgressData() {
    this.storage.getData('progress').subscribe(res => {
      if (res) {
        this.progress = res[0];
        console.log('prores', this.progress);
      }
    });
  }

  ionViewWillEnter() {
    this.loadProgressData();
  }
}
