export const getMonthIncomes = async incomes => {
  const incomesStandarized = await incomes.map(async ({ date, value }) => {
    let monthDate = `${new Date(date).getFullYear()}-${new Date(
      date
    ).getMonth() + 1}`;
    return {
      date: monthDate,
      income: parseInt(value)
    };
  });

  return await Promise.all(incomesStandarized).then(async data => {
    const result = [];

    data.forEach(function(a) {
      if (!this[a.date]) {
        this[a.date] = { date: a.date, income: 0 };
        result.push(this[a.date]);
      }
      this[a.date].income += a.income;
    }, Object.create(null));
    return result.sort(compare);
  });
};

const compare = (a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  let comparison = 0;
  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }
  return comparison * 1;
};
