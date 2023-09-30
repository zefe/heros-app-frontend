import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { filter, switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'Marvel Comics', desc: 'Marvel - Comics'}

  ];

  // inyectamos el servicio && y el activateroute para mostrar la dat en el form
  constructor( 
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ){}

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  ngOnInit(): void {
    if( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getHeroById(id) )
      ).subscribe( hero => {

        if( !hero ) {
          return this.router.navigateByUrl('/');
        }

        this.heroForm.reset( hero );
        return;
      }

      )
  }

  onSubmit():void {

    if( this.heroForm.invalid) return;

    // si currentHero tiene un ID queremos actualizar
    if( this.currentHero.id){
      this.heroesService.updateHero( this.currentHero )
        .subscribe( hero => { // hasta que me suscribo voy a tener la peticion HTTP
          this.showSnackbar(`${ hero.superhero } updated!`)
        });

        return;
    }

    //si no tiene ID creamos uno nuevo
    this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {
        //TODO: mostrar snackbar, y navegar a /heroes/edit/hero.id
        this.router.navigate(['/heroes/edit', hero.id]);
        this.showSnackbar(`${ hero.superhero } created!`)
      });
  }

  //Confirmacion de eliminacion
  onDeleteHero(){
    if( !this.currentHero.id ) throw Error('Hero is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
    .pipe(
      filter( (result: boolean) => result ),
      switchMap( () => this.heroesService.deleteHeroById( this.currentHero.id )),
      filter( (wasDeleted: boolean) => wasDeleted ),
    )
    .subscribe(result => {
      this.router.navigate(['/heroes'])
    })

    // dialogRef.afterClosed().subscribe(result => {
    //   if( !result ) return;

    //   this.heroesService.deleteHeroById( this.currentHero.id )
    //   .subscribe( wasDeleted => {
    //     if( wasDeleted ){
    //       this.router.navigate(['/heroes'])
    //     }
    //   })
    // });

  }

  showSnackbar( message: string): void{
    this.snackbar.open( message, 'done', {
      duration: 2500,
    })
  }

}
