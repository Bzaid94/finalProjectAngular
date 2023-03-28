import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {MessageModel} from "./Message.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-springboot';

  message : MessageModel = {
    id: 0,
    message: '',
    author: '',
    date: '',
    status: false
  }
  messages?: MessageModel[];

  submitted = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getAllMessages();
  }

  getAllMessages() {
    this.dataService.getAllMessages().subscribe(data => {
      this.messages = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  createMessage() {
    const data = {
      message: this.message.message,
      author: this.message.author
    };
    this.dataService.newMessage(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
      this.message = {
        message: '',
        author: '',
      };
      this.getAllMessages();
    }, error => {
      console.log(error);
    });
  }

  updateMessage() {
    const data = {
      message: this.message.message,
      author: this.message.author
    };

    this.dataService.updateMessage(this.message.id, data).subscribe(response => {
      console.log(response);
      this.submitted = true;
      this.getAllMessages();
    },
    error => {
      console.log(error);
    });
  }

  deleteMessage(id: number) {
    this.dataService.deleteMessage(id).subscribe(response => {
      console.log(response);
      this.getAllMessages();
    },
    error => {
      console.log(error);
    });
  }
}
