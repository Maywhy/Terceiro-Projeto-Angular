import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  obterTodos(id: number){
    return this.http.get("https://jsonplaceholder.typicode.com/todos/"+id);
  }

}
