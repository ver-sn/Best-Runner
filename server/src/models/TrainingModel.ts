interface ITraining {
  id: string,
  date: string;
  trainingType: string;
  mileage: string;
  comment: string;
}

export enum Dictionary {
  running = 'Бег',
  ski = 'Лыжи',
  cycle = 'Велосипед',
  walking = 'Ходьба',
}

export default ITraining;
