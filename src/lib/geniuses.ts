export enum GeniusKey {
  EINSTEIN="einstein",
  NEWTON="newton",
  DAVINCI="davinci",
  CURIE="curie",
  TESLA="tesla",
  VAN_GOGH="vangogh",
  PICASSO="picasso",
  SHAKESPEARE="shakespeare",
  CERVAANTES="cervantes",
  PLATO="plato",
}

export function select(genius: GeniusKey): { ask(prompt: string): Promise<string> } {
  class Genius {
    private _name: string;
    private _topics: string;
    private _model: string;

    constructor(name: string, topics: string, model: string) {
      this._name = name;
      this._topics = topics;
      this._model = model;
    }

    ask(prompt: string): Promise<string> {
      return new Promise<string>((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/geniuses/${this._name}?topics=${this._topics}&input=${prompt}&model=${this._model}`)
          .then(response => response.json())
          .then(data => resolve(data.response))
          .catch(error => reject(error))
      })
    }
  }

  switch (genius) {
    case GeniusKey.PLATO:
      return new Genius("Platón", "filosofía", "text-davinci-002");
    case GeniusKey.CERVAANTES:
      return new Genius("Cervantes", "literatura", "text-davinci-002");
    case GeniusKey.SHAKESPEARE:
      return new Genius("Shakespeare", "literatura", "text-davinci-002");
    case GeniusKey.PICASSO:
      return new Genius("Picasso", "arte y cultura", "text-davinci-002");
    case GeniusKey.VAN_GOGH:
      return new Genius("Van Gogh", "arte, cultura y la vida", "text-davinci-002");
    case GeniusKey.TESLA:
      return new Genius("Tesla", "ciencia y tecnología", "text-davinci-002");
    case GeniusKey.CURIE:
      return new Genius("Curie", "ciencia y tecnología", "text-davinci-002");
    case GeniusKey.DAVINCI:
      return new Genius("Da Vinci", "arte, cultura y la vida", "text-davinci-002");
    case GeniusKey.NEWTON:
      return new Genius("Newton", "ciencia y tecnología", "text-davinci-002");
    case GeniusKey.EINSTEIN:
    default:
      return new Genius("Einstein", "física", "text-davinci-002");
  }
}