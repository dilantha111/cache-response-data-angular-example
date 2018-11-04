import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
  public beers: any[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getBeerList().subscribe(res => (this.beers = res));
  }

}
