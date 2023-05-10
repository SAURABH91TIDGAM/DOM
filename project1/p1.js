// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person =document.querySelector('.person');

const quotes = [{quote:'A rose by any other name would smell as sweet.',person:'William Shakespeare'},
    {quote:'Ask not what your country can do for you; ask what you can do for your country.',person:'John Kennedy'},
    {quote:'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.',person:'Martin Luther King'},
    {quote:'If you want something said, ask a man; if you want something done, ask a woman',person:'Margaret Thatcher'},
    {quote:'That’s one small step for a man, a giant leap for mankind.',person:'Neil Armstrong'},
    {quote:'Three can keep a secret, if two of them are dead.',person:'Benjamin Franklin'},
    {quote:'You must be the change you wish to see in the world.',person:'Mahatma Gandhi'},
    {quote:'If you want to know what God thinks of money, just look at the people he gave it to.',person:'Dorothy Parker'},
    {quote:'Doing nothing is very hard to do. You never know when you’re finished.',person:'Leslie Nielsen'},
    {quote:'The older you get the more you realize that kindness is synonymous with happiness.',person:'Lionel Barrymore'},
    {quote:'Happiness often sneaks in through a door you didn’t know you left open.',person:'John Barrymore'},
    {quote:'The best index to a persons character is how he treats people who cant do him any good, and how he treats people who can fight back.',person:'Abigail Van Burren'},
    {quote:'Where all think alike, no one thinks very much.',person:'Walter Lippmann'},
    {quote:'There are no hopeless situations; there are only people who have grown hopeless about them.',person:'Clare Boothe Luce'},];

btn.addEventListener('click',function ()
                        {
                            let random= Math.floor(Math.random() * quotes.length);
                            quote.innerText = quotes[random].quote ;
                            person.innerText = quotes[random].person;
                        }
                    )