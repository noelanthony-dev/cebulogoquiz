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

  constructor(
    private storage: StorageService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.levelId = +this.route.snapshot.paramMap.get('id');
    this.loadData();
  }

  /** loadData */
  /** loads data from IndexedDB */
   loadData() {
     this.storage.getData('logos').subscribe(res => {
        if (res) {
        this.logoSet = res[0];
        this.logoSet = this.logoSet.find(i => i.logosId === this.levelId);
      }
    });
  }

}
