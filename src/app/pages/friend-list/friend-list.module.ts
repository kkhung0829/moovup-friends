import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendListPageRoutingModule } from './friend-list-routing.module';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { FriendListPage } from './friend-list.page';
import {
  FriendItemComponent,
  FriendDetailComponent,
} from '../../components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletModule,
    FriendListPageRoutingModule
  ],
  declarations: [
    FriendListPage,
    FriendItemComponent,
    FriendDetailComponent,
  ],
})
export class FriendListPageModule {}
