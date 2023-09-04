import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { ModalController } from '@ionic/angular';

import { IFriend } from '../../models/friend.interface';
import { FriendDetailComponent } from '../friend-detail/friend-detail.component';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.scss'],
})
export class FriendItemComponent  implements OnInit {
  @Input() item!: IFriend;

  public canShowDetail: boolean = true;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.canShowDetail = (this.item.location.latitude != null && this.item.location.longitude != null);
  }

  showDetail() {
    if (this.canShowDetail) {
      this.modalController.create({
        component: FriendDetailComponent,
        componentProps: {
          item: this.item,
        },
      })
      .then((modal) => {
        modal.present();
      });  
    }
  }
}
