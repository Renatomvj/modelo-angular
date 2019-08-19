import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AutenticacaoService } from './autenticacao.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { AutentificacaoGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'usuarios',
    loadChildren: 'src/app/modules/usuarios/usuarios.module#UsuariosModule',
    canActivate: [AutentificacaoGuard],  
    canLoad: [AutentificacaoGuard]
  }
  ,
  { path: '', component: HomeComponent, canActivate: [AutentificacaoGuard] },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
