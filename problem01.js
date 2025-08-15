function totalFine( fare ) {

    if(typeof fare !== "number" || fare < 1){
        return "Invalid";
    }
    else{
        return fare + fare * (20/100) + 30
    
    }

}

 console.log(totalFine(200));

