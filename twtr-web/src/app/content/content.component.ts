import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../interfaces/twtr.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  tweet = new BehaviorSubject({});

  constructor() {}

  ngOnInit() {}

  tweeted(tdata) {
    this.tweet.next(tdata);
  }
}
