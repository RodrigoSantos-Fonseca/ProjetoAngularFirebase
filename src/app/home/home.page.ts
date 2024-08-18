import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  perfil = {
    foto:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQsQOD9-q44KepHeFQXMaPzLCIEfXiUo__Ov6vXFKpib2xR5as8',
    nome:'Tiririca Florentino',
    social:'@tirflorentino',
    idioma:'Cearense',
    cidade:'Ipipoca / CE',
    tempo:'desde junho 1980 '

  }

  biografia={
    bio:'Programador com mais de 5 anos de experiência em fullstack'
  }

  social={
    metricas:[
      {
        texto: 'Curtidas',
        valor: '22k'
      },
      {
        texto: 'Seguindo',
        valor: '2.3k'
      },
      {
        texto: 'Amigos',
        valor: '1.4 k'
      }
    ],

    amigos:[
      {
        foto:'https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-1024x1024.jpg',
        nome:'Elon Musk',
        perfil:'@musk',
        post:'Pessoal,como pode o mundo acabar em 2024 se meu iogurte vence em 2025'
      },
      {
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaXrMrjkjbUISIck4kGjlm02rnXgxpHlq3sFS9xCqIzuyPppe3SHxA7sFfvqQyHmorHGxVu6bgwB7rnHGgk-leOfGiTPcLY8Yc1qzoQ',
        nome:'Snoop Doog',
        perfil:'@SnoopDoog',
        post:'Se a água é transparente, por que o gelo é branco?'
      },
      {
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHR59P3pBQCippxMawDmw2ZEpnn8MBOhQJ7A&s',
        nome:'Jair M. Bolsonaro',
        perfil:'@bolsonaro',
        post:'Sabia que se colocarmos a calculadora na geladeira teremos tudo friamente calculdado?'
      }
    ]
  }

  constructor() { }
}
