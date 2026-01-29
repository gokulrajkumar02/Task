const greaterSmaller = (a:number,b:number,c : number) : number => {
    return (a > b && a > c) ? a : ((b > a && b > c ) ? b : (c > a && c > b) ? c : 0 );
}

console.log(greaterSmaller(6,7,8))

