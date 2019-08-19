import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './Models/usuario';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private usuarioAutenticado: boolean = false;
  public mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  logar(usuario: Usuario) {

    if (usuario.funcional == "Renato" &&
          usuario.senha == "123") {
      console.log('usuario logado');
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    }
    else
    {
      this.mostrarMenuEmitter.emit(false);
      console.log('usuario não logado');
    }

  }

  usuarioEstaAutenticado()
  {
    return this.usuarioAutenticado;
  }
}
