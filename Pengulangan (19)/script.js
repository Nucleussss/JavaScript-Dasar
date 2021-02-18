let s = "";
// for( let i = 0; i < 10; i++){
//     for (let j = 0; j <= i; j++) {
//         s += "*";
//     }
//     s +="\n";
// }


// 1
// for( let i = 10; i > 0; i--){
//     for (let k = 1; k <= i; k++) {
//         s+= " ";
//     }
//     for (let j = i; j <= 9; j++) {
//         s += "*";
//     }
    
//     s +="\n";
// }

// 2
// for( let i = 0; i < 10; i++){
//     for (let j = 0; j < i; j++) {
//         s += " ";
//     }
//     for (let k = 10; k > i; k--) {
//         s += "*";
//     }
//     s +="\n";
// }


// Membuat pola wajid

for( let i = 1; i < 10; i++){
    for (let k = 10; k >= i; k--) {
        s+= " ";
    }
    for (let j = 1; j <= i+(i-1); j++) {
        s += "*";
    }
    
    s +="\n";
}
for( let i = 10; i >= 1; i--){
    for (let k = 10; k >= i; k--) {
        s+= " ";
    }
    for (let j = 1; j <= i+(i-1); j++) {
        s += "*";
    }
    
    s +="\n";
}


console.log(s);