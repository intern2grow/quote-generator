const socialLinks = (quote, platform) => {
  const sharedQuote = quote.author + " once said: " + quote.content;

  const map = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=",
    twitter: "https://twitter.com/intent/tweet?text=",
    whatsapp: "https://wa.me/?text=",
  };

  window.open(map[platform] + encodeURIComponent(sharedQuote), "_blank");
};

export default socialLinks;
