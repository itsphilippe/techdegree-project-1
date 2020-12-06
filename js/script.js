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
   source: `Charles Cooley`
  },
  {
   quote: `The only true wisdom is knowing you know nothing.`,
   source: `Socrates`
  },
  {
   quote: `It is better to change an opinion than to persist 
           in a wrong one.`,
   source: `Socrates`
  },
  {
   quote: `Sometimes you put walls up not to keep people out, 
           but to see who cares enough to break them down.`,
   source: `Socrates`
  },
  {
   quote: `Think about what you can do right now, not what you 
           wish you had done before.`,
   source: `Jay Shetty`
  }
];


/***
 * `getRandomQuote` function
***/

// Math.floor rounds to nearst whole number
// Math.random multiplies the length of items in quotes array
// returns Math.random multiplied by the amount of items in quote arrray
// use brackets to capture items in array

function getRandomQuote () { 
  let randomQuote = Math.floor(Math.random() * quotes.length); 
  return quotes[randomQuote];
}


/***
 * `printQuote` function
***/

// assigns variable to getRandomQuote 
// assigns html to class="quote" and call it with dot notation
// use getElementById to return reference with ID

function printQuote() {

  let presentQuote = getRandomQuote();
  let html = `<p class='quote'>${presentQuote.quote}</p>
              <p class='source'>${presentQuote.source}
            `;
  
  document.getElementById("quote-box").innerHTML = html;

}
// call printQuote function 
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);