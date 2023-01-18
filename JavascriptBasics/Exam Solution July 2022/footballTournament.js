function footballTournament (input) {
    let index = 0;
    let name = input[index++];
    let itterations = Number(input[index++]);
    let wins = 0;
    let draws = 0;
    let loses = 0;

    for (let i = 0; i < itterations; i++) {
        let game = input[index++];
        if (game === "W"){
            wins += 1;
        }else if (game === "D"){
            draws += 1;
        }else if (game === "L"){
            loses += 1;
        }
    }

    if (itterations == 0){
        console.log(`${name} hasn't played any games during this season.`)
    }else{
        console.log(`${name} has won ${wins * 3 + draws} points during this season.`)
        console.log("Total stats:")
        console.log(`## W: ${wins}`)
        console.log(`## D: ${draws}`)
        console.log(`## L: ${loses}`)
        console.log(`Win rate: ${((100 / itterations) * wins).toFixed(2)}%`)
    }
}

footballTournament(["Liverpool",
"10",
"W",
"D",
"D",
"W",
"L",
"W",
"D",
"D",
"W",
"W"])


footballTournament(["Barcelona",
"7",
"W",
"D",
"L",
"L",
"W",
"W",
"D"])

footballTournament(["Chelsea",
"0"])