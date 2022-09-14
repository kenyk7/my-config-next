import { CardRepository } from 'domain/cards/card.repository';
import { cardsService } from './services/cards.service';
// import { cardsLocal } from './local/cards.local';

export class ConfigData {
  cards: CardRepository;

  constructor() {
    // this.cards = cardsLocal;
    this.cards = cardsService;
  }
}

export const configData = new ConfigData();
