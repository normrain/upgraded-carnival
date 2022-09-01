const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) =>{
  const quote = getRandomElement(quotes)
  console.log(quote)
  console.log(quote.quote)
  res.status(200).send({quote: quote})
})

app.get('/api/quotes', (req, res, next) => {
  if (!req.query.hasOwnProperty('person')) {
    res.send({quotes: quotes});
  } else {
    const filterQuote = quotes.filter(element => element.person === req.query.person);
    res.send({quotes: filterQuote});
  }
});
app.post('/api/quotes', (req, res, next) => {
  if (req.query.quote && req.query.person) {
    const newQuote = {quote: req.query.quote, person: req.query.person};
    quotes.push(newQuote);
    res.send({quote: newQuote});
  }
  else {
    res.status(400).send();
  }
});
app.listen(PORT, () => {
  console.log("Server started listening on port: " + PORT)
})