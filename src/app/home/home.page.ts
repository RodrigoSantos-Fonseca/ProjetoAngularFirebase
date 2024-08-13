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

  pessoa ={
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAv4YmLgkzgbI3sdzubVgtNTRxRFUpH0O25UcaQDHhwgzOVPuOWehjPfQlib-IperHP9ltdHa5Hwl37piXU1jyFxNTufbG73bnFflikw',
    nome: 'Chefinho',
    objetivo: 'Programador HTML & CSS',
    contato:{
      email: 'chefinho@gmail.com',
      telefone: '(11) 991696969',
      github: 'github.com/chefinho',
      linkedin:'linkedin.com/chefinho'
    },
    softskills:[
      'Trabalho em Grupo',
      'Comunicação',
      'Resiliência',
      'Proatividade',
      'Criatividade'
    ],
    formacao:[
      {
        ano_inicio: '2023',
        ano_termino: '2024',
        instituicao: 'Etec Sales Gomes',
        curso: 'Desenvovilmento de Sistemas'
      },
      {
        ano_inicio: '2025',
        ano_termino: '2028',
        instituicao: 'Faculdade de Tecnologia de Tatuí',
        curso: 'Análise e Desenvovilmento de Sistemas'
      }
    ]
  }

  constructor(){ }
}
