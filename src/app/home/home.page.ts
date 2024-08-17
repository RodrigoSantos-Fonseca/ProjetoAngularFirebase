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
    foto:'https://www.quadrorama.com.br/wp-content/uploads/2023/08/leon.png',
    nome:'Rodrigo Fonseca',
    social:'@rodfonseca',
    idioma:'Português',
    cidade:'Tatuí / SP',
    tempo:'desde junho 1997'

  }

  biografia={
    bio:'Programador com mais de 5 anos de experiência em fullstack'
  }

  social={
    metricas:[
      {
        texto: 'curtidas',
        valor: '22k'
      },
      {
        texto: 'curtidas',
        valor: '32k'
      },
      {
        texto: 'curtidas',
        valor: '28k'
      }
    ],
  }

  constructor() { }
}
