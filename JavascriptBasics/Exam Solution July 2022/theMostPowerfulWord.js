function theMostPowerfulWord(input) {
 
    let strong = "";
    let total = 0;
 
    for (const element of input) {
        let word = element;
        if (word === "End of words") {
            break;
        }
 
        let sum = 0;
        for (const element of word) {
            sum += element.charCodeAt(0);
        }
 
        "AEIOUYaeiouy".search(word[0]) !== -1 ? sum *= word.length : sum /= word.length; 
 
        if (sum > total) {
            strong = word;
            total = sum;
        }
    }
    console.log(`The most powerful word is ${strong} - ${Math.floor(total)}`);
}

theMostPowerfulWord(["The",
"Most",
"Powerful",
"Word",
"Is",
"Experience",
"End of words"])


theMostPowerfulWord(["But",
"Some",
"People",
"Say",
"It's",
"LOVE",
"End of words"])
