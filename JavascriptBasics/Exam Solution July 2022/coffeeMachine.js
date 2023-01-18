function coffeeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let count = Number(input[2]);
    let totalPrice = 0;

    if (drink === "Tea") {
        unsweeted = 0.50;
        regular = 0.60;
        extraSugar = 0.70;
    } if (drink === "Espresso") {
        unsweeted = 0.90;
        regular = 1.00;
        extraSugar = 1.20;
        
    } if (drink === "Cappuccino") {
        unsweeted = 1.00;
        regular = 1.20;
        extraSugar = 1.60;
    }

    if (sugar === "Without") {
        totalPrice = count * unsweeted * 0.65;
    } if (sugar === "Normal") {
        totalPrice = count * regular;
    } if (sugar === "Extra") {
        totalPrice = count * extraSugar;
    }

    if (drink === "Espresso" && count > 5) {
        totalPrice *= 0.75;
    }

    if (totalPrice > 15) {
        totalPrice *= 0.80;
    }

    console.log(`You bought ${count} cups of ${drink} for ${totalPrice.toFixed(2)} lv.`);
}

coffeeMachine(["Espresso",
"Without",
"10"])

coffeeMachine(["Cappuccino",
"Normal",
"13"])

coffeeMachine(["Tea",
"Extra",
"3"])