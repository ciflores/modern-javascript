import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:5000';  
  private socket = io(this.url);
  //private socket = io('https://redis-chat-server.herokuapp.com/')

  on(eventName: string, callback: any){
    this.socket.on(eventName, callback);
  }
  emit(eventName: string, data: any, callback: any){
    this.socket.emit(eventName, data, callback);
  }




































  sendMessage(message){
    console.log("Sending...");
    this.socket.emit('send', message);    
  }

/*  getMessages() {
    let dataObservable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        console.log("Data");
        console.log(data);
        observer.next(data); 
      });
      this.socket.on('messages', function (message) {
        console.log("Messages");
        this.messages.push(message)
        console.log(this.messages);
      });
      this.socket.on('memberAdd', function (member) {
        console.log("member");
        this.members[member.socket] = member;
        console.log(this.members);
      });
      this.socket.on('memberDelete', function (socketId) {
        console.log("delete");
        delete this.members[socketId];
      });
      this.socket.on('messageHistory', function (messages) {
        console.log("Socket");
        this.messages = messages
        console.log(this.messages);
      });
      this.socket.on('memberHistory', function (members) {
        console.log("history");
        this.members = members
        console.log(this.members);
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }*/
}