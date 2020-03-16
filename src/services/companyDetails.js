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

  if (minDate instanceof Date && !isNaN(minDate)) {
    return { minDate, maxDate };
  } else {
    return {};
  }
};

export const getIncomes = async (startDate, stopDate, incomes) => {
  const filteredIncomes = await incomes.filter(
    ({ date }) => startDate <= new Date(date) && stopDate >= new Date(date)
  );

  let totalIncome = 0;

  await filteredIncomes.forEach(({ value }) => {
    let parsedValue = parseFloat(value);
    totalIncome += Math.round((parsedValue + Number.EPSILON) * 100) / 100;
  });

  let averageIncome =
    Math.round((totalIncome / filteredIncomes.length + Number.EPSILON) * 100) /
      100 || 0;

  return {
    totalIncome: Math.round((totalIncome + Number.EPSILON) * 100) / 100,
    averageIncome,
    filteredIncomes
  };
};
