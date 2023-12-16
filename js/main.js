// General variables
var quoteStr = document.getElementById("quoteOutput");
var quoteAuthor = document.getElementById("authorOutput");
var bodyBackground = document.body.style;
// Array to hold the quote and the author
var quotesArr = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: " Frank Zappa",
    quote: "So many books, so little time.",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    author: "William W. Purkey",
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Frank Sinatra",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
];
var randomIndex = "";

function get_quote() {
  randomIndex = Math.floor(Math.random() * quotesArr.length - 1 + 1);
  quoteStr.innerHTML = `“${quotesArr[randomIndex].quote}”`;
  quoteAuthor.innerHTML = `--${quotesArr[randomIndex].author}`;
}
var bodyArr = [
  "linear-gradient(#e66465 , #9198e5 )",
  "linear-gradient(#7158e2 , #ff3838 )",
  "linear-gradient(#f39c12 , #2c3e50 )",
  "linear-gradient(#c0392b , #e67e22 )",
  "linear-gradient(#fff200 , #e84393 )",
  "linear-gradient(#00b894 , #fdcb6e )",
  "linear-gradient(#cd84f1 , #74b9ff )",
  "linear-gradient(#a4b0be , #e84393 )",
  "linear-gradient(#ff7f50 , #55efc4 )",
];

function colorChange() {
  randomIndex = Math.floor(Math.random() * bodyArr.length - 1 + 1);
  bodyBackground.backgroundImage = bodyArr[randomIndex];
}
