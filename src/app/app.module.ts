import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CounterComponent } from './counter/counter.component';
import { InsurancesComponent } from './insurances/insurances.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CompaniesComponent } from './companies/companies.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AboutComponent,
    ServicesComponent,
    CounterComponent,
    InsurancesComponent,
    TestimonialsComponent,
    CompaniesComponent,
    FooterComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
