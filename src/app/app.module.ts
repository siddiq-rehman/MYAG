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
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { MyserviceService } from './myservice.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
    ReportscompComponent,
    AckmentComponent,
    AckcarouselComponent,
    AnimeComponent,
    FilterComponent,
    ReportdetailComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DlDateTimePickerDateModule,
    BrowserAnimationsModule,
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule,
    RouterModule.forRoot([
      {path: '',component: FirstcompComponent},
      {path: 'reports',component: ReportscompComponent},
      {path: 'ack',component: AckmentComponent},
      {path: 'anime',component: AnimeComponent},

   ]),
   AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAoFR6w73YwSUm8NVoodapN2zNB08u_8Xw'
  })
  ],
  providers: [MyserviceService, AckmentComponent,ReportdetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
