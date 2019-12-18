import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../module/usuarioid';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: User;

  busca: number;

  constructor(private lista: UserService) { }

  ngOnInit() {
    console.log("TESTE");
    this.obterUsuarios();
    }

  public obterUsuarios() {
    this.lista.obterTodos(this.busca).subscribe((resultado: User) => {
      console.log(resultado);
      this.usuario = resultado;
    });
  }
}
