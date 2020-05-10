import { Injectable, Inject } from '@angular/core';
import {WINDOW} from './app.windowProviderComponent';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window) { }

hostname = 'https://localhost:44323';
allDancersUrl = this.hostname + '/api/dancer/GetAllDancers';
dancersByNameUrl = this.hostname + '/api/dancer/GetDancersByFirstName';
dancersByPrimaryStyleUrl = this.hostname + '/api/dancer/GetDancersByPrimaryStyle';

  getAllDancers() {
    return this.http.get(this.allDancersUrl);
  }

  getDancersByFirstName() {
    return this.http.get(this.dancersByNameUrl);
  }

  getdancersByPrimaryStyle() {
    return this.http.get(this.dancersByPrimaryStyleUrl);
  }

}
