import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TituloComponent } from './titulo/titulo.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    TituloComponent,
    NavComponent,
    HomeComponent,
    BuscaComponent,
    ListaComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
