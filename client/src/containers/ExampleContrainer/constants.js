const filterOptions = [
  { value: 'all', label: 'Все типы' },
  { value: 'running', label: 'Бег' },
  { value: 'ski', label: 'Лыжи' },
  { value: 'cycle', label: 'Велосипед' },
  { value: 'walking', label: 'Ходьба' },
];

const selectOptions = [
  { value: 'running', label: 'Бег' },
  { value: 'ski', label: 'Лыжи' },
  { value: 'cycle', label: 'Велосипед' },
  { value: 'walking', label: 'Ходьба' },
];
const titleText = 'Best Runner';

const columns = [
  { Header: 'Дата', accessor: 'date' },
  { Header: 'Тип тренировки', accessor: 'trainingType' },
  { Header: 'Километраж', accessor: 'mileage' },
  { Header: 'Комментарий', accessor: 'comment' },
];

const mockData = [
  {
    id: '1',
    date: '10.02.2020',
    trainingType: 'Бег',
    mileage: '5',
    comment: '',
  },
  {
    id: '2',
    date: '11.07.2020',
    trainingType: 'Лыжи',
    mileage: '4',
    comment: '',
  },
  {
    id: '3',
    date: '18.10.2020',
    trainingType: 'Велосипед',
    mileage: '7',
    comment: '',
  },
  {
    id: '4',
    date: '21.10.2020',
    trainingType: 'Ходьба',
    mileage: '20',
    comment: '',
  },
  {
    id: '5',
    date: '10.11.2020',
    trainingType: 'Бег',
    mileage: '15',
    comment: '',
  },
];

export {
  filterOptions,
  titleText,
  columns,
  mockData,
  selectOptions,
};
