export const getLastMonthIncome = async incomes => {
  const date = new Date();
  const prevMonth = date.getMonth() - 1;
  let sum = 0;
  await incomes.forEach(({ value, date }) => {
    if (new Date(date).getMonth() === prevMonth) sum += parseFloat(value);
  });
  return Math.round((sum + Number.EPSILON) * 100) / 100;
};

export const getStartStopDates = async incomes => {
  const dates = await incomes.map(income => new Date(income.date));

  let maxDate = new Date(Math.max.apply(null, dates));
  let minDate = new Date(Math.min.apply(null, dates));
  console.log(minDate);

  if (minDate instanceof Date && !isNaN(minDate)) {
    return { minDate, maxDate };
  } else {
    return {};
  }
};
