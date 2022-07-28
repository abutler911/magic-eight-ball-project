let userName = 'Andy';
let userQuestion = 'Will I learn to code?'
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

console.log(userName ? `Hello ${userName}` : 'Hello!');
console.log(`Thanks ${userName}, you asked the question ${userQuestion}?`);

switch(randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy, try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
}

console.log(eightBall);
