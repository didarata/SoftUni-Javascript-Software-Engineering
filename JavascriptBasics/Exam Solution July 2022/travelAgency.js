function travelAgency(input) {
    let city = input[0];
    let package = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let pricePerDay = 0

    const cities = ["Bansko",  "Borovets", "Varna", "Burgas"];
    const packages = ["noEquipment", "withEquipment", "noBreakfast", "withBreakfast"];


    if (city === "Bansko" || city === "Borovets") {
        if (package === "withEquipment") {
            if (vip === "yes") {
                pricePerDay = 100 * 0.90
            } else {
                pricePerDay = 100
            }
            
            
        } else {
            if (vip === "yes") {
                pricePerDay = 80 * 0.95
            } else {
                pricePerDay = 80
            }
        }
    } if (city === "Varna" || city === "Burgas") {
        if (package === "withBreakfast") {
            if (vip === "yes") {
                pricePerDay = 130 * 0.88
            } else {
                pricePerDay = 130
            }

        } else {
            if (vip === "yes") {
                pricePerDay = 100 * 0.93
            } else {
                pricePerDay = 100
            }

        }
    }

    if (days > 7) {
        days -= 1
    }

    totalPrice = pricePerDay * days

    if (days < 1) {
        days < 0;
          console.log("Days must be positive number!");
    }else if (cities.includes(city) && packages.includes(package)) {
        console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`)
    } else {
        console.log("Invalid input!")
    }

}

travelAgency(["Borovets",
"noEquipment",
"yes",
"6"])

travelAgency(["Bansko",
"withEquipment",
"no",
"2"])


travelAgency(["Varna",
"withBreakfast",
"yes",
"5"])


travelAgency(["Burgas",
"noBreakfast",
"no",
"4"])

travelAgency(["Varna",
"withBreakfast",
"no",
"0"])

travelAgency(["Gabrovo",
"noBreakfast",
"no",
"3"])
