function familyTrip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let priceNights = Number(input[2]);
    let extraExpenses = Number(input[3]) / 100;

    if (nights > 7) {
        priceNights *= 0.95;
    }
    totalPrice = (nights * priceNights) + (budget * extraExpenses);

    if (totalPrice <= budget){
        console.log(`Ivanovi will be left with ${(budget - totalPrice).toFixed(2)} leva after vacation.`);
    }else{
        console.log(`${(totalPrice - budget).toFixed(2)} leva needed.`);
    }
}

familyTrip(["800.50",
"8",
"100",
"2"]);

familyTrip(["500",
"7",
"66",
"15"])