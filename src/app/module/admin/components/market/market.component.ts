import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
})
export class MarketComponent implements OnInit {
  getCoins: any = [];
  getLoading = false;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getLoading = true;
    this.http.getApi().subscribe((data) => {
      this.getLoading = false;
      this.getCoins = data.data;
    });
  }
}
