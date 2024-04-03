import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
   // MissionfilterComponent,
    //MissiondetailsComponent,
    // 他のコンポーネント...
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    // 他のモジュール...
  ],
  providers: [],
  bootstrap: [AppComponent] // ここは変更しないでください
})
export class AppModule { }
