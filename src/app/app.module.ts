import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionComponent } from './champions/champion/champion.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    ChampionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
