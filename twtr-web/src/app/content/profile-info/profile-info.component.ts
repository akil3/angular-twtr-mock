import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TRENDS, FOOTER_DATA } from '../../mock-data';
import { Tweet } from '../../../interfaces/twtr.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  trends = TRENDS;
  footData = FOOTER_DATA;
  composedTweet = '';
  newTweet: Tweet = {
    id: Date.now(),
    user: 'Rafa Nadal',
    userTag: '@RafaelNadal',
    profImg: 'assets/rn.jpg',
    ts: 'May 2',
    tweet: ''
  };

  constructor(private datePipe: DatePipe) {}

  @Output() tweetPosted = new EventEmitter<any>();

  ngOnInit() {}

  postTweet() {
    const ts: number = Date.now();
    this.newTweet.ts = this.datePipe.transform(ts, 'shortTime');
    this.newTweet.tweet = this.composedTweet;
    this.composedTweet = '';
    this.tweetPosted.emit(this.newTweet);
  }
}
