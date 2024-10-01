import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent  implements OnInit {

  treinos = [
    {
      nome: 'Biceps', 
      fotos: [
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Rosca-Direta-Aberta-com-Barra.gif'},
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Rosca-Direta-com-Halteres-1.gif'},
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Rosca-Alternada-com-Halteres.gif'},
      ]
    },
    {
      nome: 'Perna', fotos: [
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Mesa-Flexora.gif'},
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/sentado.gif'},
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Elevacao-Pelvica.gif'},
    ]
    },
    {
      nome: 'Peito', fotos: [
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Peck-Deck.gif'},
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Supino-Inclinado-com-barra.gif'},
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Supino-reto-com-Halteres-1.gif'},
    ]
    },    {
      nome: 'Triceps', fotos: [
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-Pulley-Barra.gif'},
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-Pulley-Corda.gif'},
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-testa-na-Polia.gif'},
    ]
    }
    
  ];



  

  
  triceps =[
    {titulo: 'Triceps'},
    {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-Pulley-Barra.gif'},
    {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-Pulley-Corda.gif'},
    {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-testa-na-Polia.gif'},
  ]

  constructor() { }

  ngOnInit() {}

}
