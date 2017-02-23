import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HackernewsApiService } from '../hackernews-api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  items;
  typeSub: any;
  pageSub: any;
  storiesType;
  pageNum: number;
  listStart: number;

  constructor(private _hackerNewsAPIService: HackernewsApiService,
  private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.typeSub = this.route
      .data
      .subscribe(data => this.storiesType = (data as any).storiesType);

    this.pageSub = this.route.params.subscribe(params => {
      this.pageNum = +params['page'] ? +params['page'] : 1;
      this._hackerNewsAPIService.fetchStories(this.storiesType, this.pageNum)
        .subscribe(
          items => this.items = items,
          error => console.log('Error fetching' + this.storiesType + 'stories'),
          () => this.listStart = ((this.pageNum - 1) * 30) + 1);
    });

  }
}
