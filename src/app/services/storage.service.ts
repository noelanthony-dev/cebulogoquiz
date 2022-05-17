/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject, from, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageReady = new BehaviorSubject(false);

  constructor(private storage: Storage) {
    this.init();
  }

   async init() {
     await this.storage.defineDriver(CordovaSQLiteDriver);
     await this.storage.create();
     this.storageReady.next(true);
   }

   getData(key) {
     return this.storageReady.pipe(
       filter(ready => ready),
       switchMap(_ => from(this.storage.get(key) || of([])))
     );
   }

   async addData(key, item) {
     const storedData = await this.storage.get(key) || [];
     storedData.push(item);
     return this.storage.set(key, storedData);
   }

   async removeItem(key, index) {
     const storedData = await this.storage.get(key) || [];
     storedData.splice(index, 1);
     return this.storage.set(key, storedData);
   }
}
