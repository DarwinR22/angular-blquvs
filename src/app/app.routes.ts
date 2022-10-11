import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './componentes/carousel/carousel.component';

const APP_ROUTES: Routes = [
  { path: 'carousel', component: CarouselComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
