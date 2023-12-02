import './App.css';
import React, {useState} from 'react';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
    </>
  )


  const Quote = ({ quote, author }) => {
    const shareOnWhatsApp = () => {
      const text = encodeURIComponent(`"${quote}" - ${author}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`);
    };
  
    const shareOnTwitter = () => {
      const text = encodeURIComponent(`"${quote}" - ${author}`);
      window.open(`https://twitter.com/intent/tweet?text=${text}`);
    };
  
    return (
      <div className="quote-container">
        <p className="quote">{quote}</p>
        <p className="author">- {author}</p>
        <div className="social-buttons">
          <a href="#" onClick={shareOnWhatsApp}>Share on WhatsApp</a>
          <a href="#" onClick={shareOnTwitter}>Share on Twitter</a>
         
        </div>
      </div>
    );
  };
    }

export default App;
