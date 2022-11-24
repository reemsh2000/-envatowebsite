import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  products: any = [
    'https://i.pinimg.com/564x/d2/c9/f9/d2c9f9c61b1bfe3935daab0ac718d3be.jpg',
    'https://i.pinimg.com/564x/49/17/4a/49174ac4c0cd77d408be0cc2b34482c7.jpg',
    'https://i.pinimg.com/564x/a8/ba/70/a8ba70764a256d431f3a1bea00875c5a.jpg',
    'https://i.pinimg.com/564x/c6/13/99/c61399f18dd6e5a44ede87a0d2efa6c9.jpg',
    'https://i.pinimg.com/564x/6f/89/0a/6f890a249a72950cb0c130915765c4f3.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
