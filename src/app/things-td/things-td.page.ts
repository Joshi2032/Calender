import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-things-td',
  templateUrl: './things-td.page.html',
  styleUrls: ['./things-td.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class ThingsTDPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
