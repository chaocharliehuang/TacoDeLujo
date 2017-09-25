import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/about' },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'suggestions', component: SuggestionsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
