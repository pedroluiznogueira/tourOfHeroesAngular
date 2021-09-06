import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // não da pra acessar no html os métodos e atributois do serviço se ele estiver privado
  constructor(public messageService: MessageService) { 
  }

  ngOnInit(): void {
  }
}
