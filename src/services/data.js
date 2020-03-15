import axios from "axios";

export const getIncomes = async companies => {
  const companiesWithIncomes = await companies.map(async companies => {
    const response = await axios.get(
      `https://recruitment.hal.skygate.io/incomes/${companies.id}`
    );
    let income = 0;
    await response.data.incomes.forEach(
      element => (income += parseFloat(element.value))
    );
    return {
      ...companies,
      income: Math.round((income + Number.EPSILON) * 100) / 100
    };
  });
  let sorted = [];
  await Promise.all(companiesWithIncomes).then(async resolved => {
    sorted = await resolved.sort(compare);
  });
  return sorted;
};

const compare = (a, b) => {
  const companyA = a.income;
  const companyB = b.income;

  let comparison = 0;
  if (companyA > companyB) {
    comparison = 1;
  } else if (companyA < companyB) {
    comparison = -1;
  }
  return comparison * -1;
};
