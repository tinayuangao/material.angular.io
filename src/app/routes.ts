import { ModuleWithProviders } from '@angular/core';
import { HomePageComponent } from './pages/homepage';
import { ComponentsPageComponent } from './pages/components';
import { DetailPageComponent } from './pages/detail';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'components', component:  ComponentsPageComponent },
  { path: 'component/:name', component: DetailPageComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
