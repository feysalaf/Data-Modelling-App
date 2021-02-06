import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//external imports
import { ChartsModule } from 'ng2-charts';
// import { ChartModule } from 'angular2-chartjs';
//for latex

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfopanelverticalComponent } from './infopanelvertical/infopanelvertical.component';
import { HeaderComponent } from './header/header.component';
import { VerticalsidebarComponent } from './verticalsidebar/verticalsidebar.component';
import { TerminalpipeComponent } from './terminalpipe/terminalpipe.component';
import { AnimationbarComponent } from './animationbar/animationbar.component';
import { AnalysispanelComponent } from './analysispanel/analysispanel.component';
import { MathjxComponent } from './mathjx/mathjx.component';

@NgModule({
  declarations: [
    AppComponent,
    InfopanelverticalComponent,
    HeaderComponent,
    VerticalsidebarComponent,
    TerminalpipeComponent,
    AnimationbarComponent,
    AnalysispanelComponent,
    MathjxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
