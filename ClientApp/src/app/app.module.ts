import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AccesoComponent } from './acceso/acceso.component';
import { CirculacionComponent } from './circulacion/circulacion.component';
import { CatalogacionComponent } from './catalogacion/catalogacion.component';
import { AdquisicionComponent } from './adquisicion/adquisicion.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { OpacComponent } from './opac/opac.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AccesoComponent,
    CirculacionComponent,
    CatalogacionComponent,
    AdquisicionComponent,
    PublicacionesComponent,
    OpacComponent,
    EstadisticasComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'acceso', component: AccesoComponent },
      { path: 'adquisicion', component: AdquisicionComponent },
      { path: 'catalogacion', component: CatalogacionComponent },
      { path: 'circulacion', component: CirculacionComponent },
      { path: 'estadisticas', component: EstadisticasComponent },
      { path: 'opac', component: OpacComponent },
      { path: 'publicaciones', component: PublicacionesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
