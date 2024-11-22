arrOfQuotes=[
    {
        quote:
        '"Be yourself; everyone else is already taken."',
       author: '"Oscar Wilde"',
    },
    {
        quote:
       ' " Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best."',
        author:'"Marilyn Monroe"',
    },

    {
        quote:
        '"So many books, so little time."',
        author:'"Frank Zappa "'
    },

    {
        quote:
        ' "Two things are infinite: the universe and human stupidity; and Im not sure about the universe." ',
        author: '" Albert Einstein "',
    },

     {
        quote:'"A room without books is like a body without a soul."',
     author:'" Marcus Tullius Cicero "',
    },

     {
         quote:'"Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind. "',
         author:'" Bernard M. Baruch "',
    },

     {
         quote:'"Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth."',
         author:'" William W. Purkey"',
     },

     {
         quote:'"You know youre in love when you cant fall asleep because reality is finally better than your dreams."',
         author:'"  Dr. Seuss  "',
    },

    {
         quote:'" You only live once, but if you do it right, once is enough. "',
        author:'"  Mae West "'
     },

     {
        quote:'"Be the change that you wish to see in the world."' ,
         author:'" Mahatma Gandhi " ',
    },
    
];

function generatQuote(){ 
    var randomNumber = Math.trunc( Math.random() * arrOfQuotes.length )
    console.log(randomNumber);


    document.getElementById('quote').innerHTML = arrOfQuotes[randomNumber].quote
    document.getElementById('author').innerHTML= arrOfQuotes[randomNumber].author
  
}





