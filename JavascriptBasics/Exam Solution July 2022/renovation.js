function renovation(input) {
    let index = 0;
    let height = Number(input[index++]);
    let width = Number(input[index++]);
    let nonPaintable = Number(input[index++]) / 100;
    let command = input[index++];
    let totalForPaint = (height * width * 4) - ((height * width * 4) * nonPaintable);

    while (command !== "Tired!") {
        let paint = command;
        totalForPaint -= paint
        command = input[index++];
        if (totalForPaint <= 0){
            break;
        }
        
    }
    if (command === "Tired!") {
        console.log(`${Math.ceil(totalForPaint)} quadratic m left.`);
    } else if ( totalForPaint === 0) {
        console.log(`All walls are painted! Great job, Pesho!`)
    } else {
        console.log(`All walls are painted and you have ${Math.abs(totalForPaint)} l paint left!`);
    }
}

// renovation(["3",
// "5",
// "10",
// "2",
// "3",
// "4",
// "Tired!"])

renovation(["2",
"3",
"25",
"6",
"7",
"8"])