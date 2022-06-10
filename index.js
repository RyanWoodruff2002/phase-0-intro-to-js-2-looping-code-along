// Code your solutions in this file


const newArray = [];


function writeCards(cardNames, event) {
    for (let i = 0; i < cardNames.length; i++) {
        newArray.push(`Thank you, ${cardNames[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}




function countDown(givenNumber) {
    let i = 0
    while (i < givenNumber) {
        console.log(givenNumber - i);
        i++;
    }
    console.log(givenNumber - givenNumber);
}
