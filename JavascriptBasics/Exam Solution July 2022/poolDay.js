function poolDay(input) {
    let countPeople = Number(input[0]);
    let entranceFee = Number(input[1]);
    let priceLounge = Number(input[2]);
    let priceUmbrella = Number(input[3]);

    let totalEntranceFee = countPeople * entranceFee;
    let totalLounge = Math.ceil(countPeople * 0.75) * priceLounge;
    let totalUmrella = Math.ceil(countPeople / 2) * priceUmbrella;
    totalPrice = totalEntranceFee + totalLounge + totalUmrella;

    console.log(`${totalPrice.toFixed(2)} lv.`);

}

poolDay(["21",
"5.50",
"4.40",
"6.20"]);