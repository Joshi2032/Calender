import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-v-password',
  templateUrl: './v-password.page.html',
  styleUrls: ['./v-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class VPasswordPage implements OnInit {
  password: string = '';
  constructor() { }

  validarPassword(): boolean {
    return this.password.length >= 8 && /[A-Z]/.test(this.password) && /\d/.test(this.password);
  }
  ngOnInit() {
  }

}
