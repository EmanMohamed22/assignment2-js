
var quotes = [
    {quote:"Be yourself; everyone else is already taken.",
       auther: "― Oscar Wilde"},
    {quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
       auther: "― Marilyn Monroe"},
    {quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
       auther: "― Albert Einstein"},
    {quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
       auther: "― Bernard M. Baruch"},
    {quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
       auther: "― Dr. Seuss"},
    {quote:"“Be the change that you wish to see in the world.”",
       auther: "― Mahatma Gandhi"},
    {quote:"“If you tell the truth, you don't have to remember anything.”",
       auther: "― nerar Wilde"},
    {quote:"Be yourself; everyone else is already taken.",
       auther: "― far Wilde"},
    {quote:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
       auther: "― J.K. Rowling, Harry Potter and the Goblet of Fire"},
    {quote:"“Always forgive your enemies; nothing annoys them so much.”",
       auther: "― Ooscar Wilde"}
]

function genrateQuote(){
     
   document.getElementById("kee").innerHTML = (quotes[Math.floor(Math.random()*quotes.length)].quote) ;

   document.getElementById("kee1").innerHTML = (quotes[Math.floor(Math.random()*quotes.length)].auther)
}
