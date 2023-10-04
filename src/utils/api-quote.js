const apiQuote = async () => {
  const url = "https://api.quotable.io/random";
  return fetch(url).then((response) => response.json());
};

export default apiQuote;
