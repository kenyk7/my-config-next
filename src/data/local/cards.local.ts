/* eslint class-methods-use-this: "off" */
import { Card } from 'domain/cards/Card';
import { CardRepository } from 'domain/cards/card.repository';

const data: Card[] = [
  {
    name: 'Documentation',
    info: 'Find in-depth information about Next.js features and API.',
    url: 'https://nextjs.org/docs',
  },
  {
    name: 'Learn',
    info: 'Learn about Next.js in an interactive course with quizzes!',
    url: 'https://nextjs.org/learn',
  },
  {
    name: 'Examples',
    info: 'Discover and deploy boilerplate example Next.js projects.',
    url: 'https://github.com/vercel/next.js/tree/canary/examples',
  },
  {
    name: 'Deploy',
    info: 'Instantly deploy your Next.js site to a public URL with Vercel.',
    url: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
  },
];

class CardsLocal implements CardRepository {
  getCards = () => {
    return new Promise<Card[]>((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 999);
    });
  };
}

export const cardsLocal = new CardsLocal();
