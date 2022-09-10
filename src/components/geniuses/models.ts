import { GeniusKey } from "../../lib/geniuses";

const modelList = [
  {
    label: 'Científicos',
    key: 'scientists',
    figures: [
      {
        key: 'einstein',
        name: 'Albert Einstein',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png',
        description: 'Físico alemán',
      },
      {
        key: 'tesla',
        name: 'Nikola Tesla',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg',
        description: 'Inventor serbio',
      },
    ],
  },
  {
    label: 'Artistas',
    key: 'artists',
    figures: [
      {
        key: 'vangogh',
        name: 'Vincent van Gogh',
        avatar: 'http://d5wt70d4gnm1t.cloudfront.net/media/a-s/articles/2817-368649535256/attack-of-the-clones-how-much-is-a-30000-reproduction-of-a-van-gogh-really-worth-512x512-c.jpg',
        description: 'Pintor holandés',
      }
    ]
  },
  {
    label: 'Filósofos',
    key: 'philosophers',
    figures: [
      {
        key: 'plato',
        name: 'Platón',
        avatar: 'https://www.worldhistory.org/img/r/p/500x600/1165.jpg?v=1655239682',
        description: 'Filósofo griego',
      }
    ]
  }
] as { 
  label: string,
  key: string,
  figures: { 
    key: GeniusKey,
    name: string,
    avatar: string,
    description: string,
  }[] 
}[];

export default modelList;