import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { TestcommandsComponent } from './testcommands/testcommands.component';
import { InfopanelverticalComponent } from './infopanelvertical/infopanelvertical.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheaderComponent,
    TestcommandsComponent,
    InfopanelverticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent,TopheaderComponent,TestcommandsComponent]
})
export class AppModule { }
