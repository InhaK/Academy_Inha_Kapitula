function integer(a,b){
    if(a>0 && b>0 && a>b){
        console.log("The larger number is "+ a);
    } else if (a>0 && b>0 && a<b){
        console.log("The larger number is "+ b);
    } else if (a===b && a>0 && b>0){
        console.log("Both numbers are equal!");
    } else {
        console.log("Please add an integer!");
    }
}
integer(10);