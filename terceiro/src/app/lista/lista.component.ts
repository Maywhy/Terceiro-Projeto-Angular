import { Component, OnInit } from '@angular/core';
import { User } from '../module/usuarioid';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public listaDeUsers: User[];

  constructor(private userServ: UserService) { }

  ngOnInit() {

    this.userServ.obterTodos().subscribe((resultado: User[]) => {
      this.listaDeUsers = resultado;
      console.log("Teste")
      console.log(this.listaDeUsers);
    });
  }

}
