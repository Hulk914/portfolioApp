import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';
import { MyIntroComponent } from './my-intro/my-intro.component';
import { HomeSkillsComponent } from './home-skills/home-skills.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopNavComponent,
    MyIntroComponent,
    HomeSkillsComponent,
    CardWrapperComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
