import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.page.html',
  styleUrls: ['./login-p.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
