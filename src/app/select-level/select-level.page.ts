import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.page.html',
  styleUrls: ['./select-level.page.scss'],
})
export class SelectLevelPage implements OnInit {

  levels: any;

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
}
