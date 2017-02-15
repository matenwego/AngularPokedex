import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routes } from './routes';

import { Main, PokemonComponent } from './containers';
import { Navbar } from './ui';

import { PokedexService } from './pokedex.service';
import { CapitalizePipe } from './capitalize.pipe';
import { TypesComponent } from './types/types.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    Main,
    PokemonComponent,
    Navbar,
    TypesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [PokedexService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
