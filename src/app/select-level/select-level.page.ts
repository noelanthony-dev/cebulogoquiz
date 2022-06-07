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

  ngOnInit() {
    this.loadProgressData();
  }

  /** loadData */
  /** loads data from IndexedDB */
  async loadData() {
    await this.storage.getData('levels').subscribe(res => {
        if (res) {
        this.levels = res[0];
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
  levelProgress(index: number): number {
    let counter = 0;
    this.progress[index].forEach(element => {
      if (element.status) {
        counter++;
      }
    });
    return counter;
  }

  /* data wont appear if loaddata() is in ngoninit */
  ionViewWillEnter() {
    this.loadData();
    this.loadProgressData();
  }

  /* percentageProgress(a , b) */
  /* converts number of completed logos and total logos to percentage */
  percentageProgress(index: number): number{
    return this.levelProgress(index) / this.progress[index].length * 100;
  }

  totalLevels(index: number): number {
    return this.progress[index].length;
  }

  /* helper class */
  /* used to supress console error */
  typeOf(value) {
    return typeof value;
  }
}
