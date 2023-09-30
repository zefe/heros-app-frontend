import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  //recibir el heroe
  @Input()
  public hero!: Hero; // con ! decimos que siempre va a venir pero validamos con ngOnInit

  ngOnInit(): void {
    if( !this.hero ) throw Error('Hero property is required');
  }

}
