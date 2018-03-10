import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';


import { RouterModule} from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ReportscompComponent } from './reportscomp/reportscomp.component';
import { AckmentComponent } from './ackment/ackment.component';
import { AckcarouselComponent } from './ackcarousel/ackcarousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimeComponent } from './anime/anime.component';
import { FilterComponent } from './filter/filter.component';
import { ReportdetailComponent } from './reportdetail/reportdetail.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';



@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
    ReportscompComponent,
    AckmentComponent,
    AckcarouselComponent,
    
    AnimeComponent,
    
    FilterComponent,
    
    ReportdetailComponent
  ],
  imports: [
    BrowserModule,
    DlDateTimePickerDateModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '',component: FirstcompComponent},
      {path: 'reports',component: ReportscompComponent},
      {path: 'ack',component: AckmentComponent},
      {path: 'anime',component: AnimeComponent}
   ]),
   AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAoFR6w73YwSUm8NVoodapN2zNB08u_8Xw'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
