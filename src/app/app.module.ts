import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfopanelverticalComponent } from './infopanelvertical/infopanelvertical.component';
import { HeaderComponent } from './header/header.component';
import { VerticalsidebarComponent } from './verticalsidebar/verticalsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    InfopanelverticalComponent,
    HeaderComponent,
    VerticalsidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [ VerticalsidebarComponent]
})
export class AppModule { }
