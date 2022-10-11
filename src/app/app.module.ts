import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//routes
import  {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, APP_ROUTING ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, CarouselComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
