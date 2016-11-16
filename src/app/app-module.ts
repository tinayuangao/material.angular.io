import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {MaterialDocsApp} from './material-docs-app';
import {HomePageComponent} from './pages/homepage/homepage';
import {NavBarComponent} from './shared/navbar';
import {Plunker} from './shared/plnkr';
import {routing} from './routes';
import {ComponentsPageComponent} from './pages/components';
import {DetailPageComponent} from './pages/detail';


@NgModule({
  declarations: [
    MaterialDocsApp,
    ComponentsPageComponent,
    DetailPageComponent,
    HomePageComponent,
    NavBarComponent,
    Plunker,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing,
  ],
  providers: [
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],
  bootstrap: [MaterialDocsApp],
})
export class AppModule {}
