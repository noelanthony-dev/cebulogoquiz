import { Component, OnInit } from '@angular/core';
import { Level } from '../models/level.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.page.html',
  styleUrls: ['./select-level.page.scss'],
})
export class SelectLevelPage implements OnInit {

  levels: Level[];
  progress: any;

  constructor(private storage: StorageService) {}

  ngOnInit() {}

  /** loadData */
  /** loads data from IndexedDB */
  async loadData() {
    await this.storage.getData('levels').subscribe(res => {
        if (res) {
        this.levels = res[0];
        console.log('levels', this.levels);
        console.log('levels', typeof this.levels);
      }
    });
  }

  /** loadProgressData */
  /** loads progress data from IndexedDB */
  loadProgressData() {
    this.storage.getData('progress').subscribe(res => {
      if (res) {
        this.progress = res[0];
      }
    });
  }

  /* levelProgress(i) */
  /* accepts the index of level as parameter */
  /* returns the number of completed levels for the level */
  levelProgress(i) {
    let counter = 0;
    if (typeof this.progress !== 'undefined' && typeof this.progress[i] !== 'undefined') {
      this.progress[i].forEach(element => {
        if (element.status) {
          counter++;
        }
      });
    }
    return counter;
  }

  /* data wont appear if loaddata() is in ngoninit */
  ionViewWillEnter() {
    this.loadData();
    this.loadProgressData();
  }

  /* helper class */
  /* used to supress console error */
  typeOf(value) {
    return typeof value;
  }

  /* percentageProgress(a , b) */
  /* converts number of completed logos and total logos to percentage */
  percentageProgress(index: number): number{
    let returnValue = 0;
    if (typeof this.progress !== 'undefined' && typeof this.progress[index] !== 'undefined') {
      returnValue = this.levelProgress(index) / this.progress[index].length * 100;
    }
    return returnValue;
  }

  totalLevels(index: number): number {
    let returnValue = 0;
    console.log('this.progress', this.progress);
    if (typeof this.progress !== 'undefined' && typeof this.progress[index] !== 'undefined') {
      returnValue = this.progress[index].length;
    }
    return returnValue;
  }
}
