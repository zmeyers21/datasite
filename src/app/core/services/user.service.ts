import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userContext = new Subject<any>();
  private _detailsId = new Subject<any>();

  userContext = this._userContext.asObservable();
  detailsId = this._detailsId.asObservable();

  constructor() { }

  changeUserContext(context: any) {
    this._userContext.next(context);
  }

  changeDetailsId(id: string) {
    this._detailsId.next(id);
  }
}
