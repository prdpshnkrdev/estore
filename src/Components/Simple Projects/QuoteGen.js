import React, { useEffect, useState } from "react";
import "./QuoteGen.css";

function genRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function QuoteGen() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(genRandomQuote(quotes));
  }

  return (
    <main>
      <h1>Quote Generator</h1>
      <section>
        <button onClick={getNewQuote}>Quote</button>
        <h3>
          <span>"</span>
          {quote?.text}
        </h3>
        <i> - {quote?.author}</i>
      </section>
    </main>
  );
}
