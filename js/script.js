/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// create array object named "quotes"

const quotes = [
  {
   quote: `I am not who you think I am; 
           I am not who I think I am; 
           I am who I think you think I am.`,
   source: `Charles Cooley`,
   citation: `Inscriptions: Praire Poetry`,
   year: 1992

  },
  {
   quote: `The more we define ourselves in relation to the people around us, 
           the more lost we are.`,
   source: `Jay Shetty`,
   citation: `Think Like a Monk`,
   year: 2020
  },
  {
   quote: `If you don’t break your ego, life will break it for you.`,
   source: `Jay Shetty`,
   citation: `Think Like a Monk`,
   year: 2020
  },
  {
   quote: `Sometimes you put walls up not to keep people out, 
           but to see who cares enough to break them down.`,
   source: `Socrates`
  },
  {
   quote: `The combination of passion and art is what makes someone a linchpin.`,
   source: `Seth Godin`,
   citation: `Linchpin`,
   year: 2010

  }
];


/***
 * `getRandomQuote` function
***/

/*
 * Math.floor returns a number less than or equal to the length of items in quotes array
 * Math.random multiplies the length of items in quotes array
 * returns Math.random multiplied by the amount of items in quote arrray
 * use brackets to capture items in array
*/

function getRandomQuote () { 
  let randomQuote = Math.floor(Math.random() * quotes.length); 
  return quotes[randomQuote];
}


/***
 * `printQuote` function
***/

/* 
 * assigns variable to getRandomQuote 
 * assigns html to class="quote" and call it with dot notation
 * use getElementById to return reference with ID
 * use for-in to include items with class="citation" and class="year"
*/

function printQuote() {

  let presentQuote = getRandomQuote();
  let html = `<p class='quote'>${presentQuote.quote}</p>
              <p class='source'>${presentQuote.source}
            `;
  for ( let i in presentQuote) {
    if (presentQuote[i] === presentQuote.citation) {
      html += `<span class='citation'>${presentQuote.citation}</span>
               <span class='year'>${presentQuote.year}</span>
             `;
    } 
  }
  
  document.getElementById("quote-box").innerHTML = html;

}
// call printQuote function 
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);