import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageReceived = false;

  message = {
    name: '',
    text: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.messageReceived = true;
    this.message = {
      name: '',
      text: ''
    }
  }

}
