function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
export function roll() {
    var dice = getRandomInt(6)+1
    console.log(dice);
    return dice;
}
