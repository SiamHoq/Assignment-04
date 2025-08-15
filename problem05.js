
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
