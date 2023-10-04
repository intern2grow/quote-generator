const socialLinks = (quote, platform) => {
  const sharedQuote = quote.author + " once said: " + quote.content;

  const facebook = "https://www.facebook.com/sharer/sharer.php?u=&quote=";
  const twitter = "https://twitter.com/intent/tweet?text=";
  const whatsapp = "https://api.whatsapp.com/send?text=";

  const link =
    platform === "facebook"
      ? facebook
      : platform === "twitter"
      ? twitter
      : whatsapp;

  window.open(link + encodeURIComponent(sharedQuote), "_blank");
};

export default socialLinks;
