import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectLevelPageRoutingModule } from './select-level-routing.module';

import { SelectLevelPage } from './select-level.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectLevelPageRoutingModule
  ],
  declarations: [SelectLevelPage]
})
export class SelectLevelPageModule {}
