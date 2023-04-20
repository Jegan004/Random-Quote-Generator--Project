import React, { useState, useEffect } from 'react';
import '../components/span.css'
import twitterIcon from '../twitter.svg';
import tumblrIcon from '../tumblr.svg';
import speechIcon from '../speaker.png';
import facebookIcon from'../facebook.png';


const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    getQuote()
  }, []);
  

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const quoteBoxClass = `quote-box ${isDarkMode ? 'dark-theme' : 'light-theme'}`;
  const textColorClass = isDarkMode ? 'text-white' : 'text-black';

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        
      })
  }

  const handleClick = () => {
    getQuote();
    generateQuote();
    document.body.style.backgroundColor = getRandomColor();
  }

  const getRandomColor = () => {
    let letters = '89ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} - ${author}`)}`;
    window.open(tweetUrl, '_blank');
  };

  const tumblrQuote = () => {
    const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(
      author
    )}&content=${encodeURIComponent(quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
    window.open(tumblrUrl, '_blank');
  };

  
  const shareOnFacebook = () => {
    const quoteAndAuthor = `${quote} - ${author}`;
    const postUrl = encodeURIComponent(window.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}&quote=${quoteAndAuthor}`;
    window.open(facebookUrl, '_blank');
  };

  const readQuote = () => {
    const speech = new SpeechSynthesisUtterance(`${quote} - ${author}`);
    speech.lang = 'en-US';
    speechSynthesis.speak(speech);
  };
  const copyQuote = () => {
    navigator.clipboard.writeText(quote);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const generateQuote = () => {
    setIsCopied(false);
  };


  const Footer = () => {
    return (
      <footer>
 
      </footer>
    );
  };

  return (
    <div>
      <center>
      <div class="text">
  <span><b>Q</b></span>
  <span><b>U</b></span>
  <span><b>O</b></span>
  <span><b>T</b></span>
  <span><b>E</b></span>
  <span><b></b></span>
  <span><b>G</b></span>
  <span><b>E</b></span>
  <span><b>N</b></span>
  <span><b>E</b></span>
  <span><b>R</b></span>
  <span><b>A</b></span>
  <span><b>T</b></span>
  <span><b>O</b></span>
  <span><b>R</b></span>
</div>
      </center>
      <span class="border border-black">
      <div className={quoteBoxClass} id="quote-box" >
        <div className={textColorClass} id="text" ><p><i><b>{quote}</b></i></p></div>
        <div className={textColorClass}  id="author" ><p><b>{author}</b></p></div>

        <div id="buttons">
          <div className="social-media">
            <a href="#" id="tweet-quote" onClick={tweetQuote}>
              <span><img src={twitterIcon} alt="Twitter icon" /></span>
            </a>
            <a href="#" id="post-fb" onClick={shareOnFacebook}>
              <span><img src={facebookIcon} alt="Facebook icon" /></span>
            </a>
            <a href="#" id="tumblr-quote" onClick={tumblrQuote}>
              <span><img src={tumblrIcon} alt="Tumblr icon" /></span>
            </a>
            
          </div>
          <button class="btn-ripple" onClick={handleClick} id="new-quote" style={{marginRight:'100px',backgroundColor:'red',borderRadius:'9px',width:"10rem", fontSize:"12px"}}>New Quote</button>
          <button onClick={readQuote} style={{borderRadius:'50px',padding:'4px 4px',fontSize:'small',backgroundColor:'#0059ff'}}><img src={speechIcon} alt=""></img></button>

        </div>
      </div>
      </span>
      <><button  class="btn btn-dark"   onClick={copyQuote} id="copy-quote" style={{marginLeft:"490px",borderRadius:'6px'}}>
          <h3>  {isCopied ? 'Copied!' : 'Copy'}</h3>
            </button></>
           <><button class="btn btn-dark"  onClick={toggleTheme} style={{marginLeft:"370px",borderRadius:'7px'}}><h3>Toggle Theme</h3></button></>
      <Footer/>
    </div>
  )
}

export default Quotes;
