import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero //Es opcional porque cuando se carga el componente en algun punto no tenemos valor y es null

    constructor( 
      private heroesService: HeroesService,
      private activedRoute: ActivatedRoute,
      private router: Router,
    ) {}

    ngOnInit(): void {
      this.activedRoute.params
        .pipe(
          //delay(3000),
          switchMap( ({ id }) => this.heroesService.getHeroById(id) ) 
        )
        .subscribe( hero => {
          if( !hero ) return this.router.navigate([ '/heroes/list' ]);
          this.hero = hero;
          console.log(hero)
          return
        })
    }

    goBack():void {
      this.router.navigateByUrl('/heroes/list')
    }

}
