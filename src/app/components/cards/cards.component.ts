import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.interface';
import { CardsService } from 'src/app/services/cards.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(1500)),
    ]),
  ],
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  displayedColumns: string[] = ['id', 'name', 'author', 'slogan'];
 
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService
    .getAllCards()
    .subscribe((cards) => this.cards = cards);
  }
 
}
