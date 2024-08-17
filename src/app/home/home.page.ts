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

  segments: string ='usuarios';

  usuarios = [
    {
      nome: 'Seleide Silva',
      idade: 20,
      genero: 'Feminino', 
      rotinas:[
        {
          dia: 'segunda-feira',
          treinos: [
            "Rosca Direta",
            "crucifixo",
            "Remada Curvada"
          ]
        },
        {
          dia: 'quarta-feira',
          treinos: [
            "Rosca Invertida",
            "Pulley",
            "Remada Sentada"
          ]
        },
        {
          dia: 'sexta-feira',
          treinos: [
            "Supino Inclinado",
            "Biceps Corda",
            "Biceps Hulk Invertido"
          ]
        }
      ]
    },
    {
      nome: 'Marciano Verdinho',
      idade: 25,
      genero: 'masculino', 
      rotinas:[
        {
          dia: 'terça-feira',
          treinos: [
            "Prancha Redonda",
            "Jumping Bom dia Popai",
            "Flexão de Costas"
          ]
        },
        {
          dia: 'quinta-feira',
          treinos: [
            "Rosca direta",
            "Pulley corda",
            "Remada curvada"
          ]
        },
        {
          dia: 'sabado',
          treinos: [
            "Supino declinado",
            "Triceps Frânces",
            "Agachamento"
          ]
        }
      ]
    }
  ] 

  constructor(){}


  trocar(event: any){
    this.segments = event.detail.value;
  }
}
