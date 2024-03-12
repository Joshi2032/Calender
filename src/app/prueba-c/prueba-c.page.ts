import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-prueba-c',
  templateUrl: './prueba-c.page.html',
  styleUrls: ['./prueba-c.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PruebaCPage implements OnInit {

  highlightedDates=[{
date:'2024-01-01', 
textColor: '#800080',
backgroundColor: '#ffc0cb'
  },
  {

  },
  {

  }
];
  constructor() { }

  ngOnInit() {
  }

}
