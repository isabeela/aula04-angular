import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { MultTableComponent } from './mult-table/mult-table.component';
import { HelloComponent } from './hello.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'greeting', component: GreetingComponent },
      { path: 'mult-table', component: MultTableComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    GreetingComponent,
    MultTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
