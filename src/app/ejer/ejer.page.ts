import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import{add} from 'ionicons/icons'
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ejer',
  templateUrl: './ejer.page.html',
  styleUrls: ['./ejer.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class EjerPage implements OnInit {

  constructor() {
    addIcons({add});
   }

  ngOnInit() {
  }

}
