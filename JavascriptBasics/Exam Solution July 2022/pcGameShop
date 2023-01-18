function pcGameShop(input) {
    let index = 0;
    let itterations = Number(input[index++]);
    let heartstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 0; i < itterations; i++) {
        let game = input[index++];
        if (game === "Hearthstone"){
            heartstone += 1;
        }else if (game === "Fornite"){
            fornite += 1;
        }else if (game === "Overwatch"){
            overwatch += 1;
        }else{
            others += 1;
        }
    }
    console.log(`Hearthstone - ${((100 / itterations) * heartstone).toFixed(2)}%`)
    console.log(`Fornite - ${((100 / itterations) * fornite).toFixed(2)}%`)
    console.log(`Overwatch - ${((100 / itterations) * overwatch).toFixed(2)}%`)
    console.log(`Others - ${((100 / itterations) * others).toFixed(2)}%`)
}

pcGameShop(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"])

pcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])
