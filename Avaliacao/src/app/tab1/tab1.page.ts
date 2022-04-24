import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @Input() altura: number;
  @Input() peso: number;



  valorImc: any;
  descricao: any;

  constructor() {}
  ngOnInit(): void {
  }

  verificar(){
      if(!this.altura || !this.peso){
      alert("DADOS INVALIDOS !!!");
      }else{
        this.calcular();
      }
  }

  calcular(){
    var calAltura = this.altura * this.altura;
    this.valorImc = (this.peso /calAltura).toFixed(2);
    if(this.valorImc < 18.05 ){
      return this.descricao = "ABAIXO DO NORMAL"
    }else if(this.valorImc >= 18.05  && this.valorImc <= 24.90 ){
      return this.descricao = "NORMAL"
    }else if(this.valorImc >= 25.0  && this.valorImc <= 29.90 ){
      return this.descricao = "SOBREPESO"
    }else if(this.valorImc >= 30.00  && this.valorImc <= 40.00 ){
      return this.descricao = "OBESIDADE"
    }else{
      return this.descricao = "OBESIDADE GRAVE"
    }
  }

}
