
const levels = 5;

for(let i=1;i<=levels;i++){

    let left_tree = ""
    let right_tree = ""
    for(let j=1;j<=i-1;j++){
       left_tree += j+" "
    }
    for(let k=i-1;k>=1;k--){
        right_tree += k + " "
    }

    console.log(left_tree + i +" "+ right_tree)
}

/**
 * output
 *
1
1 2 1
1 2 3 2 1
1 2 3 4 3 2 1
1 2 3 4 5 4 3 2 1
*/
