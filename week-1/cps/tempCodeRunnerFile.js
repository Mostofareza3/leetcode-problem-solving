function getPerutations(str = "ABC"){
    let permutationsArray = []
    for(let i=0; i<str.length; i++){
        let mainChar = str[i]
        for(let j=1; j<str.length; j++){
            mainChar+= str[j]
        }
        permutationsArray.push(mainChar)
    }
    console.log(permutationsArray)
}

getPerutations()