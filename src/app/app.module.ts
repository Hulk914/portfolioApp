import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';
import { MyIntroComponent } from './my-intro/my-intro.component';
import { HomeSkillsComponent } from './home-skills/home-skills.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactCardLayoutComponent } from './contact-card-layout/contact-card-layout.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutProductComponent } from './about-product/about-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopNavComponent,
    MyIntroComponent,
    HomeSkillsComponent,
    CardWrapperComponent,
    HomeComponent,
    ContactComponent,
    ContactCardLayoutComponent,
    HobbiesComponent,
    AboutComponent,
    ExperienceComponent,
    AboutProductComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
