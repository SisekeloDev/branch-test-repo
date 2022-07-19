const btn0 = document.getElementById('hideBtn').onclick = revealVideo;//call: compute function
setInterval(init, 1000);
const init = () => document.getElementById("display").hidden = false;

const hideVideo = () => document.getElementById("display").hidden = true; 

//REDUCE METHOD
const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
    ];
    
const marioTotal = scores.reduce((_accumulator, current) => {
    if (current.player === 'mario'){
        _accumulator+= current.score;
}
    return _accumulator;
});

const arrowMarioTotal = scores.reduce((_accumulator, current) => (current.player === 'mario') ? _accumulator += current.score : _accumulator);

//MAP
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salesPrices = prices.map(price => price/2);

const products =[
    {name: 'gold star', price:20},
    {name: 'mushroom', price:40},
    {name: 'green shells', price:30},
    {name: 'banana skin', price:10},
    {name: 'red shells', price: 50}
];

const saleProducts = products.map((product) => (product.price > 30) ? {name: product.name, price: product.price/2} : product);

//FIND
const scores2 = [10,5,0,40,60,10,20,70];

const firstHighScore = scores2.find(score => score > 50);
const firstHighScore2 = scores2.find(score => score > 90);


//SORT
const names = ['mario', 'shaun', 'chun-li', 'luigi'];

names.sort();

// const