import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.page.html',
  styleUrls: ['./select-level.page.scss'],
})
export class SelectLevelPage implements OnInit {

  levels: any;
  progress: any;

  constructor(private storage: StorageService) {
    this.loadData();
   }

  ngOnInit() {}

  /** loadData */
  /** loads data from IndexedDB */
  async loadData() {
    await this.storage.getData('levels').subscribe(res => {
        if (res) {
        this.levels = res[0];
        console.log(this.levels);
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

  /* levelProgress(i) */
  /* accepts the index of level as parameter */
  /* returns the number of completed levels for the level */
  levelProgress(i) {
    let counter = 0;
    this.progress[i].forEach(element => {
      if (element.status) {
        counter++;
      }
    });
    return counter;
  }

  ionViewWillEnter() {
    this.loadProgressData();
  }
}
