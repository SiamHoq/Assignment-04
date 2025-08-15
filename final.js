//problem-01  Train TT's Fine Calculator

function totalFine( fare ) {

    if(typeof fare !== "number" || fare < 1){
        return "invalid";
    }
    else{
        return fare + fare * (20/100) + 30
    
    }

}

//  console.log(totalFine(200));


// problem-02 Clean & Capitalize Characters

function  onlyCharacter( str ) {
    
    if(typeof str !== "string"){
        return 'invalid';
    }
    const space = str.split(" ");
    let replace = "";

    for(const Character of space){
        replace= replace + Character.toUpperCase()
    }
    return replace;
}

// console.log(onlyCharacter(" Cy   bar- At  tac k  "))


// problem-03  FIFA Best Team Award

// const team = [
//     { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
//     { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }

//     ]

function  bestTeam( player1, player2 ) {

    if( typeof player1 !== "object" || typeof player2 !== "object"){
        return 'invalid';
    }

 const player1TotalFaul = player1.foul + player1.cardY + player1.cardR
 const player2TotalFaul = player2.foul + player2.cardY + player2.cardR

 if(player1TotalFaul === player2TotalFaul){
    return "tie";
 }
 else if(player1TotalFaul < player2TotalFaul){
    return player1.name;
 }
 else{
    return player2.name;
 }

}
//  console.log(bestTeam(team[0],team[1]));




 // Problem-04: Same Same But Different 

function  isSame(arr1 , arr2 ) {
    if(! Array.isArray(arr1) || ! Array.isArray(arr2)){
        return 'invalid';
    }
    else if(arr1.length !== arr2.length){
        return false;
    }

    for(let index =0; index  < arr1.length; index ++){
        if(arr1[index] !== arr2[index]){
            return false;
        }
    }
    return true;
}

// const array1 = [1 , 4 , 5];

// const array2 = [1 , 4 , 5];

// console.log(isSame(array1,array2))




// Problem-05: Exam Result Report Generator

// const array = [98, 87, 67, 91, 92, 33, 87]
// const array = [];

function  resultReport( marks ) {
    
    if(!Array.isArray(marks)){
        return "invalid";
    }


    let pass = 0;
    let fail = 0;
    let finalScore = 0;


    for(const num of marks){
        finalScore = finalScore + num;
        if(num >= 40){
          pass++;
        }
        else{
          fail++;
        }

    }
    
    finalScore = finalScore / marks.length;

    if (marks.length === 0){
    finalScore = 0;
  }
     
    return {"finalScore": Math.round(finalScore), "pass": pass, "fail": fail};

}

// const result = resultReport(array);
// console.log(result);
