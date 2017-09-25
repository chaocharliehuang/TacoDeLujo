import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TacoService } from './taco.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    MenuComponent,
    SuggestionsComponent,
    ContactComponent,
    CareersComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TacoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
