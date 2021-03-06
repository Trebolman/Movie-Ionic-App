import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  @Output() cargaPeliculas =  new EventEmitter();

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true,
    spaceBetween: -10
  };
  constructor() { }

  ngOnInit() {}

  cargarMas(){
    this.cargaPeliculas.emit();
  }
}
