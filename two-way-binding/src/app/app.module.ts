import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataListContainerComponent } from './data-list-container/data-list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    DataListContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
