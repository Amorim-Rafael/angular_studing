import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nightlife/';
  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Angular';

  getValor(){ return 1; }

  getCurtirCurso(){ return true; }

  botaoClicado(){ alert('clicado'); }

  onKeyUp(evento: KeyboardEvent){ 
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){ this.valorSalvo = valor; }

  onMouseOverOut(){ this.isMouseOver = !this.isMouseOver; }

  constructor() { }

  ngOnInit() {
  }

}
