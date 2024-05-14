import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-prueba-c',
  templateUrl: './prueba-c.page.html',
  styleUrls: ['./prueba-c.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})

export class PruebaCPage implements OnInit {
  
  escolar = [
    {
      date: '2024-01-22',
      textColor: '#ffffff',
      backgroundColor: '#40BF1D',
    },
    {
      date: '2024-01-23',
      textColor: '#ffffff',
      backgroundColor: '#40BF1D',
    },
    {
      date: '2024-01-24',
      textColor: '#ffffff',
      backgroundColor: '#40BF1D',
    },
    {
      date: '2024-01-29',
      textColor: '#ffffff',
      backgroundColor: '#B0F223',
    },
// febrero
    {
      date: '2024-02-01',
      backgroundColor: '#FF1515',
      textColor: '#ffffff',      

    },
    {
      date: '2024-02-02',
      backgroundColor: '#FF1515',
      textColor: '#ffffff',      

    },
    
    {
      date: '2024-02-05',
      backgroundColor: '#8C8585',
      textColor: '#ffffff',

    },
    {
      date: '2024-02-09',
      backgroundColor: '#FB6161',
      textColor: '#ffffff',      

    },

    // marzo
    {
      date: '2024-03-18',
      backgroundColor: '#8C8585',
      textColor: '#ffffff',
    },
    {
      date: '2024-03-25',
      backgroundColor: '#484646',
      textColor: '#ffffff',
    },
    {
      date: '2024-03-26',
      backgroundColor: '#484646',
      textColor: '#ffffff',
    },
    {
      date: '2024-03-27',
      backgroundColor: '#484646',
      textColor: '#ffffff',
    },
    {
      date: '2024-03-28',
      backgroundColor: '#484646',
      textColor: '#ffffff',
    },
    {
      date: '2024-03-29',
      backgroundColor: '#484646',
      textColor: '#ffffff',
    },

    // abril
    {
      date: '2024-04-01',
      backgroundColor: '#484646',
      textColor: '#ffffff',
    },
    {
      date: '2024-04-02',
      backgroundColor: '#484646',
      textColor: '#ffffff',
    },
    {
      date: '2024-04-03',
      backgroundColor: '#484646',
      textColor: '#ffffff',
    },
    {
      date: '2024-04-04',
      backgroundColor: '#484646',
      textColor: '#ffffff',
    },
    {
      date: '2024-04-05',
      backgroundColor: '#484646',
      textColor: '#ffffff',
    },
    {
      date: '2024-04-19',
      backgroundColor: '#E4FF00',
    },
    
    // mayo
    {
      date: '2024-05-01',
      backgroundColor: '#8C8585',
      textColor: '#ffffff',
    },
    {
      date: '2024-05-15',
      backgroundColor: '#8C8585',
      textColor: '#ffffff',
    },
    {
      date: '2024-05-31',
      backgroundColor: '#FB6161',
      textColor: '#ffffff',      
    },

    // junio
    {
      date: '2024-06-24',
      backgroundColor: '#ffa500',
    },
    {
      date: '2024-06-25',
      backgroundColor: '#ffa500',
    },
    {
      date: '2024-06-26',
      backgroundColor: '#ffa500',
    },
    {
      date: '2024-06-27',
      backgroundColor: '#ffa500',
    },
    {
      date: '2024-06-28',
      backgroundColor: '#ffa500',
    },

    //julio
    {
      date: '2024-07-01',
      backgroundColor: '#ffa500',
    },
    {
      date: '2024-07-02',
      backgroundColor: '#ffa500',
    },
    {
      date: '2024-07-03',
      backgroundColor: '#ffa500',
    }
  ];


  

  

  constructor() {}

  ngOnInit() {}
}
