const url = "https://api.npoint.io/324f4ca2cdd639760638";

export default {
  async fetchData() {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  },
};
