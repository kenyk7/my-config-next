import { useEffect, useState } from 'react';

import { configData } from 'data/config.data';
import { Card } from 'domain/cards/Card';
import styles from 'styles/Home.module.scss';

export const HomeView = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    configData.cards.getCards().then((result) => {
      setCards(result);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        {loading && <p>Loading...</p>}

        <div className={styles.grid}>
          {cards.map((item) => (
            <a key={item.name} href={item.url} className={styles.card}>
              <h2>{item.name} &rarr;</h2>
              <p>{item.info}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
