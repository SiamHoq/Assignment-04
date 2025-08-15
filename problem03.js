const team = [
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }

    ]

function  bestTeam( player1, player2 ) {
    // You have to write your code here

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
 console.log(bestTeam(team[0],team[1]));