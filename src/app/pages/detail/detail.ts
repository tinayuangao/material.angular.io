import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.html',
  styleUrls: ['detail.scss'],
})
export class DetailPageComponent implements OnInit {
  componentName: string = null;

  constructor(private route: ActivatedRoute) {};

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.componentName = params['name'];
    });
  }
}
