import ITraining from '../models/TrainingModel';

const dictionary = {
  running: 'Бег',
  ski: 'Лыжи',
  cycle: 'Велосипед',
  walking: 'Ходьба',
}

class FilterService {
  public static filter(arr: ITraining[], option: string): ITraining[] {
    if (option === 'all') {
      return arr;
    }
    return arr.filter(item => item.trainingType === dictionary[option]);
  }
}

export default FilterService;