import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../module/usuarioid';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  private id: number;
  private msgErro: string = null;
  private user: User = null;

  constructor(private userServ: UserService) { }

  ngOnInit() {
  }

  private pesquisar() {
    if (this.id <= 0) {
      this.msgErro = "Digite um numero valido";
      this.user = null;
    }
    else {
      this.msgErro = null;
      this.userServ.obterTodos(this.id).subscribe((resultado: User) => {
        this.user = resultado;
        console.log(this.user);
      })
    }

  }

}
