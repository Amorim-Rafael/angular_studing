import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

    nome: string = 'abc';
  
    pessoa: any = {
      nome: 'Rafael',
      idade: 30,
      endereco:{
        nome: 'Rua tralalá',
        numero: 10
      }
    }

  constructor() { }

  ngOnInit() {
  }

}
