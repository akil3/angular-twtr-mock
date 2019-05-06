import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { routes } from './routes';
import {
  ContentComponent,
  ProfileInfoComponent,
  TweetsComponent
} from './content/index';

import { ParsetweetPipe } from './pipes/parsetweet.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileInfoComponent,
    ContentComponent,
    TweetsComponent,
    ParsetweetPipe
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [ProfileInfoComponent, ContentComponent, TweetsComponent]
})
export class AppModule {}
