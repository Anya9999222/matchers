import sortArray, { items } from '../matchers';

test('check sorted array', () => {
  const sortedArray = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = sortArray(items);
  expect(result).toEqual(sortedArray);
});
