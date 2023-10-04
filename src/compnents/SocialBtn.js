const SocialBtn = ({ icon, url }) => {
  const shareQuoteHandler = () => {
    window.open(url, 'Share', 'width=600, height=400');
  };
  return (
    <button className="social-btn" onClick={shareQuoteHandler}>
      {icon}
    </button>
  );
};

export default SocialBtn;
