import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PlunkerUtil } from './plnkr-util';

@Component({
  selector: 'app-plnkr',
  templateUrl: 'plnkr.html',
})
export class Plunker implements OnInit {
  private _description: string = 'Some description for material';

  @Input()
  set description(description: string) {
    this._description = description;
  }

  get description(): string {
    return this._description;
  }

  examplePath = '/app/shared/plnkr/example/';
  exampleFiles = ['button-demo.html', 'button-demo.scss', 'button-demo.ts'];
  selectorName = 'button-demo';
  indexFilename = 'button-demo';
  componentName = 'ButtonDemo';

  plunkerUtil: PlunkerUtil;

  constructor(private _http: Http) {
    this.plunkerUtil = new PlunkerUtil(_http);
  }

  ngOnInit() {
    this.plunkerUtil.initPlunker(this.examplePath,
      this.exampleFiles,
      this.selectorName,
      this.indexFilename,
      this.componentName,
      this.description);
  }

  openPlunker(): void {
    this.plunkerUtil.openPlunker();
  }
}
