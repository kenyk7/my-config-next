/* eslint class-methods-use-this: "off" */
import { Card } from 'domain/cards/Card';
import { CardRepository } from 'domain/cards/card.repository';

type CardApi = Omit<Card, 'info'> & {
  description: string;
};

class CardsService implements CardRepository {
  static cardMapper(item: CardApi): Card {
    const { name, description: info, url } = item;
    return { name, info, url };
  }

  getCards = async () => {
    const response = await fetch('/api/hello');
    const data: CardApi[] = await response.json();
    return data.map(CardsService.cardMapper);
  };
}

export const cardsService = new CardsService();
