import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  menu ={
    logo: 'https://cdn3.iconfinder.com/data/icons/vol-3/128/fitness-512.png',
    itens:[
      {icone: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678085-house-64.png', texto: 'Inicio'},
      {icone: 'https://cdn1.iconfinder.com/data/icons/user-interface-44/48/Information-256.png', texto: 'Sobre'}, //about
      {icone: 'https://cdn1.iconfinder.com/data/icons/multimedia-33/512/multimedia_galery_picture-64.png', texto: 'Galeria'}, //galery
      {icone: 'https://cdn1.iconfinder.com/data/icons/ecommerce-228/128/chat_box_chatting_chat_talk_conversation_message-256.png', texto: 'Contato'} //Contato
    ]
  }

  constructor() { }

  ngOnInit() {}

}
