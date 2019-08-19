import { Component } from '@angular/core';
import { AutenticacaoService } from './autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  mostrarMenu: boolean = false;

  constructor(private loginService: AutenticacaoService)
  {}

  ngOnInit(){
    this.loginService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }



}
