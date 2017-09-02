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
<<<<<<< HEAD
  valorSalvo: string = '';
=======
  valorSalvo = '';
  isMouseOver: boolean = false;
>>>>>>> e541ffa8cd295b136ceb1966a0f0274d551766ec

  getValor(){ return 1; }

  getCurtirCurso(){ return true; }

<<<<<<< HEAD
  botaoClicado() { alert('Botão clicado') }
=======
  botaoClicado(){ alert('clicado'); }
>>>>>>> e541ffa8cd295b136ceb1966a0f0274d551766ec

  onKeyUp(evento: KeyboardEvent){ 
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

<<<<<<< HEAD
  salvarValor(valor) { this.valorSalvo = valor; }
=======
  salvarValor(valor){ this.valorSalvo = valor; }

  onMouseOverOut(){ this.isMouseOver = !this.isMouseOver; }
>>>>>>> e541ffa8cd295b136ceb1966a0f0274d551766ec

  constructor() { }

  ngOnInit() {
  }

}
