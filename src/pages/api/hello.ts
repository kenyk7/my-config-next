// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const data = [
  {
    name: 'Documentation',
    description: 'Find in-depth information about Next.js features and API.',
    url: 'https://nextjs.org/docs',
  },
  {
    name: 'Learn',
    description: 'Learn about Next.js in an interactive course with quizzes!',
    url: 'https://nextjs.org/learn',
  },
  {
    name: 'Examples',
    description: 'Discover and deploy boilerplate example Next.js projects.',
    url: 'https://github.com/vercel/next.js/tree/canary/examples',
  },
  {
    name: 'Deploy',
    description:
      'Instantly deploy your Next.js site to a public URL with Vercel.',
    url: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
