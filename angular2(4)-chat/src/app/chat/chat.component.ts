import { Component, OnInit,OnDestroy } from '@angular/core';
//import { Component } from '@angular/core';
import { ChatService }       from './chat.service';
import * as moment from 'moment';

@Component({
  selector: 'chat-component',
  templateUrl: './chat.component.html',
  providers: [ChatService]
})
export class ChatComponent /*implements OnInit, OnDestroy*/ {
  messages = [];
  members = [];
  message = '';
  
  constructor(private chatService:ChatService) {
    this.chatService.on('messages', this.handleMessages.bind(this));
    this.chatService.on('messageHistory', this.handleHistory.bind(this));
    this.chatService.on('memberHistory', this.handleMembers.bind(this));
    this.chatService.on('memberAdd', this.handleAdd.bind(this));
    this.chatService.on('memberDelete', this.handleDelete.bind(this));
  };

  handleMessages(message){
    this.messages.push(message);
  };

  handleHistory(messages){
    this.messages = messages;
  };

  handleMembers(members){
    var tmp = [];
    Object.keys(members).forEach(key => {
      tmp.push(members[key]);
    });
    this.members = tmp;
  };

  handleAdd(member){
    this.members.push(member);
  };

  handleDelete(id){
    for(let i=this.members.length-1; i>=0; i--){
      if(this.members[i].id === id){
        this.members.splice(i, 1);
        i = -1;
      }
    }
  };

  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  };

  formatMemberDate(date) {
    return moment(date).format('h:mm:ss a');
  };
  formatMessageDate(date) {
    return moment(date).format('h:mm:ss a');
  };
}
