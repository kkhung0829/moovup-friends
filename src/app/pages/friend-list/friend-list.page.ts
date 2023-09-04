import { Component, OnInit } from '@angular/core';

import { FriendsEndPointService } from '../../services/friends-end-point.service';
import { IFriend } from '../../models/friend.interface';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.page.html',
  styleUrls: ['./friend-list.page.scss'],
})
export class FriendListPage implements OnInit {
  public friends: IFriend[] = [];

  constructor(private friendsService: FriendsEndPointService) { }

  ngOnInit() {
    this.friendsService.getFriendList().subscribe((friends: IFriend[]) => {
      this.friends = friends;
    });
  }

}
