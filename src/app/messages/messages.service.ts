import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  // private messages = signal<string[]>([]);
  private messages: String[] = [];
  // allMessages = this.messages.asReadonly();
  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    // this.messages.update((prevMessages) => [...prevMessages, message]);
    this.messages = [...this.messages, message];
  }
}
