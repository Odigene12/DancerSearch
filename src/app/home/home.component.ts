import { Component, OnInit } from '@angular/core';
import { Dancer } from '../Models/dancer';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public dancerObject: Dancer;

  allDancers: Dancer[];

  constructor(private api: ApiService) {
    this.dancerObject = new Dancer();
  }

  ngOnInit() {
  }

  clearForm() {
    this.dancerObject.clearDancerObject();
  }

  searchForDancer() {

    if (!this.dancerObject.isEmpty(this.dancerObject)) {
      console.log('has entries');
    } else {
      this.api.getAllDancers()
        .subscribe(data => {
          for (const dancer of (data as Dancer[])) {
            this.allDancers.push(dancer);
          }
          console.log(this.allDancers);
        });
    }
  }
}
