import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20';

  constructor(private readonly http: HttpClient) { }


  getData() {
    return this.http.get(this.url);
  }
}
