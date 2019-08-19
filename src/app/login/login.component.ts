import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/usuario';
import { AutenticacaoService } from '../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private service: AutenticacaoService) { }

  ngOnInit() {
    let u = new Usuario();
    u.funcional="Renato";
    u.senha = "123";
    this.usuario = u;
  }

  logar()
  {    
    this.service.logar(this.usuario);
  }
}
