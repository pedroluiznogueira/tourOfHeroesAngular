import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// MessageService -> HeroComponent -> HeroComponent
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}