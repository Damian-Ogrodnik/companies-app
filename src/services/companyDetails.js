export const getLastMonthIncome = async incomes => {
  const date = new Date();
  const prevMonth = date.getMonth() - 1;
  let sum = 0;
  await incomes.forEach(({ value, date }) => {
    if (new Date(date).getMonth() === prevMonth) sum += parseFloat(value);
  });
  return Math.round((sum + Number.EPSILON) * 100) / 100;
};
