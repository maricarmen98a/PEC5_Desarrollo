import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from 'src/app/models/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  details: boolean = false;
  panelOpenState = false;

  cards: Card[] = [];
  constructor(
    private cardsService: CardsService, 
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');    
    this.cardsService.getCardById(identifier).subscribe((cards) => this.cards = cards)
  }
  showDetails() {
    this.details = true;
  }
  hideDetails() {
    this.details = false;
  }
}