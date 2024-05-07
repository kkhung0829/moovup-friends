import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { IFriend } from '../models/friend.interface';

@Injectable({
  providedIn: 'root'
})
export class FriendsEndPointService {

  constructor(private http: HttpClient) { }

  getFriendList(): Observable<IFriend[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer b2atclr0nk1po45amg305meheqf4xrjt9a1bo410`,
    });

    return this.http.get<IFriend[]>(
      'https://api.json-generator.com/templates/-xdNcNKYtTFG/data',
      { headers: headers },
    );
  }
}
