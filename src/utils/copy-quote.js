const copyQuote = (quote) => {
  navigator.clipboard.writeText(quote.author + " once said: " + quote.content);
  alert("copied");
};

export default copyQuote;
