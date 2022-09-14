import { Card } from './Card';

export interface CardRepository {
  getCards: () => Promise<Card[]>;
}
