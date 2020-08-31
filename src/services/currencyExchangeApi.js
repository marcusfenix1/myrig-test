const url = "https://api.exchangeratesapi.io/latest";

export default {
  async convertCurrency(sum) {
    const response = await fetch(url);
    const data = await response.json();
    const usdSalary = Math.round((sum * data.rates.USD).toFixed(1));
    return usdSalary;
  },
};
