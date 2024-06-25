import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SictionThreeComponent } from './components/siction-three/siction-three.component';
import { SectionFourComponent } from './components/section-four/section-four.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SictionThreeComponent,
    SectionFourComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
