import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const getAllDancersURL = '/api/Dancer/GetAllDancers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllDancers() {
    return this.http.get(getAllDancersURL);
  }
}
