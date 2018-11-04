import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  public beers: any[];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getBeerList().subscribe(res => (this.beers = res));
  }
}
