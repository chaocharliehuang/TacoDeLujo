import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TacoService } from './taco.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    MenuComponent,
    SuggestionsComponent,
    ContactComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [TacoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
