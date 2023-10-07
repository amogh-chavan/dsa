
const levels = 5;

for(let i=1;i<=levels;i++){
    const start_char = 'A'.charCodeAt(0)

    let left_tree = ""
    let right_tree = ""
    for(let j=1;j<=i-1;j++){
       left_tree += String.fromCharCode(start_char + j - 1)+" "
    }
    for(let k=i-1;k>=1;k--){
        right_tree += String.fromCharCode(start_char + k - 1) + " "
    }

    console.log(left_tree + String.fromCharCode(start_char + i - 1) +" "+ right_tree)
}
/**
 * output 
 *  
A 
A B A 
A B C B A 
A B C D C B A 
A B C D E D C B A 
*/