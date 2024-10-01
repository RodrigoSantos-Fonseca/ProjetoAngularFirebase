import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {
 
  banner={
    foto: 'https://www.designi.com.br/images/preview/12971507.jpg',
  }

  constructor() { }

  ngOnInit() {}

}
