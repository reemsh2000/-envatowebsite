import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  items = [
    {
      pic: 'http://bizreviewd8.symphonythemes.net/sites/bizreviewd8/files/images/17.resized.png',
      txt: 'List our own business for free. Be visible and be searchable to millions of users.',
    },
    {
      pic: 'http://bizreviewd8.symphonythemes.net/sites/bizreviewd8/files/images/9.resized.png',
      txt: 'Review and recommend places that you visited. Share your feelings, your experiences.',
    },
    {
      pic: 'http://bizreviewd8.symphonythemes.net/sites/bizreviewd8/files/images/11.resized.png',
      txt: 'Be a part of a growing community, with a thousand of enthusiasts, just like you.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
