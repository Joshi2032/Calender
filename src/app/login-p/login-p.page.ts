import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoGoogle, logoFacebook, logoApple } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.page.html',
  styleUrls: ['./login-p.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class LoginPPage implements OnInit {

  constructor() { 
    addIcons({ logoGoogle, logoFacebook, logoApple  })
  }

  ngOnInit() {
  }

}
