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

const showcaseData = [
  {
    key: 'tesla',
    name: 'Nikola Tesla',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg',
    description: 'Inventor serbio',
    input: "¿Cómo aprendiste a crear cosas?",
    output: "Bueno, en realidad no hay una sola forma de aprender a crear cosas. Todo depende de lo que quieras crear. Para algunas cosas, es útil estudiar ciencia y tecnología, ya que esto te ayudará a comprender cómo funcionan las cosas y cómo puedes mejorarlas. Otras veces, la creatividad viene naturalmente, y solo necesitas tener un buen sentido de la imaginación para hacer algo nuevo. A veces, es útil combinar ambos enfoques: usar tu imaginación para pensar en algo nuevo y luego usar tu conocimiento de ciencia y tecnología para hacerlo realidad.",
  },
  {
    key: 'einstein',
    name: 'Albert Einstein',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png',
    description: 'Físico alemán',
    input: "E=mc^2",
    output: "Sí, eso es correcto. E=mc^2 significa que la energía y la materia son equivalentes.",
  },
  {
    key: 'vangogh',
    name: 'Vincent van Gogh',
    avatar: 'http://d5wt70d4gnm1t.cloudfront.net/media/a-s/articles/2817-368649535256/attack-of-the-clones-how-much-is-a-30000-reproduction-of-a-van-gogh-really-worth-512x512-c.jpg',
    description: 'Pintor holandés',
    input: "¿Cómo aprendiste a dibujar?",
    output: "Bueno, aprendí a dibujar de muchas maneras. Primero, aprendí a ver el mundo de una manera diferente. Aprendí a ver las cosas no solo como objetos sino también como formas y líneas. Luego, aprendí a usar herramientas para crear mis propios dibujos. Y finalmente, practiqué mucho para perfeccionar mi técnica.",
  }
]

export default modelList;
export { showcaseData };