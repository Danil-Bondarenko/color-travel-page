import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetHotelCardDataService {
  constructor(private httpClient: HttpClient) {
  }

  public getHotelCardData(): any {
    return this.httpClient.get('https://randomuser.me/api/?inc=name,picture&results=8&nat=gb')
  }

}
