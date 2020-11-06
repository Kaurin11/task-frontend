import React, { useState } from 'react';
import QuotesList from '../../data/quotes.json';
import './stylee.scss';

const Quotes = () => {

    function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }


      const [listQuotes] = useState(QuotesList);

      const quotesList = shuffleArray(listQuotes);

      var quot = quotesList[0];


    return (

        <div className="quotes">
            {quot && (
                <div>
                    <div>{quot.quotes}</div>
                    <div>{quot.author}</div>
                </div>
            )}
        </div>
    )
}

export default Quotes;