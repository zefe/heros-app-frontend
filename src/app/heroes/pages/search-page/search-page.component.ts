import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  //inyectar para llamar el servicio
  constructor( private heroesService: HeroesService ){}

  //Buscar heroes
  searchHero(){
    const value: string = this.searchInput.value || '';
    this.heroesService.getSuggestions( value )
      .subscribe(heroes => this.heroes = heroes);
  }

  //Seleccionar heroe
  onSelectedOption( event: MatAutocompleteSelectedEvent ): void {
    if(!event.option.value){
      this.selectedHero = undefined;
      return;
    }

    const hero:Hero = event.option.value;
    this.searchInput.setValue( hero.superhero );

    this.selectedHero = hero;
  }

}
