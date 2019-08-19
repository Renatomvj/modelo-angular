import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';

import { AutenticacaoService } from './autenticacao.service';
import { AutentificacaoGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AutenticacaoService, AutentificacaoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
