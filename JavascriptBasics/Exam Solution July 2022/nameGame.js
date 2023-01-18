function nameGame(input) {
    let index = 0
    let comand = input[index++]
    let title = ''
    let winer = 0
 
    while (comand !== 'Stop') {
        let sum = 0
        let i = 0
        let x = 0
        while (i < comand.length) {
            let compare = Number(input[index++])                    
            i++
            let probEqual = 0
           
            while(x < i){
                probEqual += comand[x].charCodeAt()
                x++
            }
            if(probEqual === compare){
                sum += 10
            }else{
                sum += 2
            }
        }  
         if(sum >= winer){
             title = comand
             winer = sum
         }        
        comand = input[index++]
    }
    console.log(`The winner is ${title} with ${winer} points!`);
}


nameGame(["Ivan",
"73",
"20",
"98",
"110",
"Ivo",
"80",
"65",
"87",
"Stop"])


nameGame(["Pesho",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"])
