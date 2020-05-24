export const getAverage = (data, field) => {
  const total = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue[field],
    0,
  );
  const avg = total / data.length || 0;
  return avg;
};
