import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v-email',
  templateUrl: './v-email.page.html',
  styleUrls: ['./v-email.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class VEmailPage implements OnInit {

  email: string = '';

  constructor() { }

  validarEmail(): boolean {
    return this.email.trim() !== '' && this.email.includes('@');
  }

  ngOnInit() {
  }

}
