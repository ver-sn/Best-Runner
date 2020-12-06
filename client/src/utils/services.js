const deleteOneTraining = (arr, id) => arr.filter(item => item.id !== id);

const changeTraining = (arr, training) => {
  if (arr.some(item => item.id === training.id)) {
    return arr.map((i) => {
      if (i.id === training.id) {
        return training;
      }
      return i;
    });
  }
  return [...arr, training];
};

export {
  deleteOneTraining,
  changeTraining,
};
