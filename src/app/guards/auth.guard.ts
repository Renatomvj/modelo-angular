
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { AutenticacaoService } from '../autenticacao.service';
import { Observable } from 'rxjs';



@Injectable()
export class AutentificacaoGuard implements CanActivate, CanLoad {

    constructor(
        private autenticacaoService: AutenticacaoService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

        console.log('Usuario can activate');

        return this.verificarAcesso();
    }



    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canLoad: verificando se usuário pode carregar o cod módulo');

        return this.verificarAcesso();
    }

    private verificarAcesso() {
        if (this.autenticacaoService.usuarioEstaAutenticado()) {
            console.log('Tem permissão')
            return true;
        }

        this.router.navigate(['/login']);

        return false;
    }

}