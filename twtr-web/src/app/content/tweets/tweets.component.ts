import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TWEETS } from '../../mock-data';
import { Tweet } from '../../../interfaces/twtr.interface';
import { isUndefined, isObject } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit, OnDestroy {
  tweets = TWEETS;
  subscriptions: SubscriptionLike[] = [];

  constructor() {}

  @Input() newTweet: BehaviorSubject<any>;

  ngOnInit() {
    const tweetSubscription = this.newTweet.subscribe(data => {
      if (!isUndefined(data) && data.id) {
        this.tweets.unshift(data);
      }
    });
    this.subscriptions.push(tweetSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
