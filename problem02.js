function  onlyCharacter( str ) {
          // You have to write your code here
    if(typeof str !== "string"){
        return 'Invalid';
    }
    const space = str.split(" ");
    let replace = "";

    for(const Character of space){
        replace= replace + Character.toUpperCase()
    }
    return replace;
}

console.log(onlyCharacter(" Cy   bar- At  tac k  "))

