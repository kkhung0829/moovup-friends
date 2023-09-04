import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
} from '@angular/core';
import { latLng, LatLng, tileLayer, Map, marker, icon, Icon } from 'leaflet';

import { IFriend } from '../../models/friend.interface';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.scss'],
})
export class FriendDetailComponent  implements OnInit, AfterViewInit {
  @Input() item!: IFriend;

  public mapOptionsReady = false;
  public options = {};

  private map?: Map;

  constructor() { }

  ngOnInit() {
    let layer = marker([ this.item.location.latitude, this.item.location.longitude ], {
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    });

    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        layer,
      ],
      zoom: 15,
      center: latLng(this.item.location.latitude, this.item.location.longitude),
    };

    this.mapOptionsReady = true;
  }

  mapReady(map: Map) {
    console.log(`mapRead()`);
    this.map = map;
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit()`);
    setTimeout(() => {
      this.map?.invalidateSize();
    }, 100);
  }
}
